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
  const [budget, setBudget] = useState(null);
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
    async function getBudget() {
      try {
        const response = await http.get(url);
        setBudget(response.data);
      } catch (error) {
        setFetchError(error.toString());
      } finally {
        setFetchingbudget(false);
      }
    }
    getBudget();
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
      <h3>Budget</h3>
      <Form onSubmit={handleSubmit((data) => onSubmit(data))}>
        {updated && <div className="success">The budget was updated</div>}

        {updateError && <FormError>{updateError}</FormError>}
        <fieldset disabled={updatingbudget}>
          <Form.Group>
            <Form.Label>budget name: </Form.Label>
            <Form.Control
              name="name"
              defaultValue={budget.incomep}
              ref={register}
            />
            {errors.name && <FormError>{errors.name.message}</FormError>}
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
