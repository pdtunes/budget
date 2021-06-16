import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormError from "../../common/FormError";
import useAxios from "../../hooks/useAxios";
import { Container, Form } from "react-bootstrap";
import { BASE_URL, BUDGETS_ENDPOINT } from "../../constants/api";
import { editSchema } from "../../schemas/editSchema";
import styles from "./Calculator.module.css";
/* import DeletebudgetButton from "../../buttons/DeletebudgetButton"; */

export default function Calculator() {
  const [budget, setbudget] = useState(null);
  const [updated, setUpdated] = useState(false);
  const [fetchingbudget, setFetchingbudget] = useState(true);
  const [updatingbudget, setUpdatingbudget] = useState(false);
  const [fetchError, setFetchError] = useState(null);
  const [updateError, setUpdateError] = useState(null);

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(editSchema),
  });

  const http = useAxios();
  const url = `${BASE_URL}${BUDGETS_ENDPOINT}`;

  useEffect(() => {
    async function getbudget() {
      try {
        const response = await http.get(url);
        setbudget(response.data);
      } catch (error) {
        setFetchError(error.toString());
      } finally {
        setFetchingbudget(false);
      }
    }
    getbudget();
  }, [url, http]);

  async function onSubmit(data) {
    setUpdatingbudget(true);
    setUpdateError(null);
    setUpdated(false);
    console.log("sending...", data);
    try {
      const response = await http.put(url, data);
      console.log(response.data);
      setUpdated(true);
    } catch (error) {
      setUpdateError(error.toString());
    } finally {
      setUpdatingbudget();
    }
  }

  if (fetchingbudget) return <div>Loading...</div>;

  if (fetchError) return <div>Error loading the budget</div>;

  return (
    <Container className={styles.wrapper}>
      <h3>{budget.title}</h3>
      <Form onSubmit={handleSubmit((data) => onSubmit(data))}>
        {updated && <div className="success">The budget was updated</div>}

        {updateError && <FormError>{updateError}</FormError>}
        <div>
          <img src={budget.image_url} width="100%" alt={budget.title} />
        </div>
        <fieldset disabled={updatingbudget}>
          <Form.Group>
            <Form.Label>budget name: </Form.Label>
            <Form.Control
              name="name"
              defaultValue={budget.name}
              ref={register}
            />
            {errors.name && <FormError>{errors.name.message}</FormError>}
          </Form.Group>
          <Form.Group>
            <Form.Label>budget shortdescription: </Form.Label>
            <Form.Control
              name="smalldescription"
              defaultValue={budget.smalldescription}
              ref={register}
            />
            {errors.smalldescription && (
              <FormError>{errors.smalldescription.message}</FormError>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>budget description 1: </Form.Label>
            <Form.Control
              name="description1"
              defaultValue={budget.description1}
              ref={register}
            />
            {errors.description1 && (
              <FormError>{errors.description1.message}</FormError>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>budget address: </Form.Label>
            <Form.Control
              name="description3"
              defaultValue={budget.description3}
              ref={register}
            />
            {errors.description3 && (
              <FormError>{errors.description3.message}</FormError>
            )}
          </Form.Group>
          <Form.Group>
            <Form.Label>Prices: </Form.Label>
            <Form.Control
              name="prices"
              defaultValue={budget.prices}
              ref={register}
            />
            {errors.prices && <FormError>{errors.prices.message}</FormError>}
          </Form.Group>
          <Form.Group>
            <Form.Label>Image 1 </Form.Label>
            <Form.Control
              name="img1"
              defaultValue={budget.img1}
              ref={register}
            />
            {errors.img1 && <FormError>{errors.img1.message}</FormError>}
          </Form.Group>
          <Form.Group>
            <Form.Label>Image 2 </Form.Label>
            <Form.Control
              name="img2"
              defaultValue={budget.img2}
              ref={register}
            />
            {errors.img2 && <FormError>{errors.img2.message}</FormError>}
          </Form.Group>{" "}
          <Form.Group>
            <Form.Label>Image 3 </Form.Label>
            <Form.Control
              name="img3"
              defaultValue={budget.img3}
              ref={register}
            />
            {errors.img3 && <FormError>{errors.img3.message}</FormError>}
          </Form.Group>{" "}
          <Form.Group>
            <Form.Label>Image 4 </Form.Label>
            <Form.Control
              name="img4"
              defaultValue={budget.img4}
              ref={register}
            />
            {errors.img4 && <FormError>{errors.img4.message}</FormError>}
          </Form.Group>
          <button className={styles.button} type="submit">
            Update
          </button>
          <hr />
          {/*   <DeletebudgetButton id={budget.id} name={budget.name} /> */}
        </fieldset>
      </Form>
    </Container>
  );
}
