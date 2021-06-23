import { useState, useEffect } from "react";
import { BASE_URL, INCOMES_ENDPOINT } from "../../constants/api";
import useAxios from "../../hooks/useAxios";
import { Container } from "react-bootstrap";
import styles from "./Incomes.module.css";
import Outcomes from "./Outcomes";

export default function Incomes() {
  const [incomes, setIncomes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const http = useAxios();

  useEffect(() => {
    async function getAllIncomes() {
      try {
        const response = await http.get(`${BASE_URL}${INCOMES_ENDPOINT}`);
        console.log(response);
        setIncomes(response.data);
      } catch (error) {
        setError(error);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    getAllIncomes();
  }, []);

  if (loading) return <div>Loading..</div>;
  if (error) return <div>an error happened</div>;

  return (
    <>
      <Container className="main">
        <h1> Incomes </h1>
        <div className={styles.incomeswrap}>
          {incomes.map((income) => {
            console.log(incomes);

            return (
              <div
                className={styles.incomeswrap}
                className="table-responsive"
                key={income.id}
              >
                <table className="table table-striped">
                  <tbody>
                    <tr className={styles.incomeswrap}>
                      <td className={styles.tdbox}>
                        <b>Name:</b> {income.ititle}
                      </td>

                      <td className={styles.tdboxmail}>
                        <b>NOK:</b>
                        {income.incomenumber}
                      </td>

                      <td className={styles.tdbox}>
                        {/*    <DeleteButtonIncomes */}
                        {/*    id={income.id}
                        lastname={income.lastname}
                        firstname={income.firstname}
                        /> */}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
}
