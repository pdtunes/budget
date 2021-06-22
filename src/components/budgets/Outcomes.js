import { useState, useEffect } from "react";
import { BASE_URL, OUTCOMES_ENDPOINT } from "../../constants/api";
import useAxios from "../../hooks/useAxios";
import { Container } from "react-bootstrap";
import styles from "./Incomes.module.css";

export default function Outcomes() {
  const [outcomes, setIncomes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const http = useAxios();

  useEffect(() => {
    async function getAllIncomes() {
      try {
        const response = await http.get(`${BASE_URL}${OUTCOMES_ENDPOINT}`);
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
        <h1> Expenses </h1>
        <div className={styles.outcomeswrap}>
          {outcomes.map((outcome) => {
            console.log(outcomes);

            return (
              <div
                className={styles.outcomeswrap}
                className="table-responsive"
                key={outcome.id}
              >
                <table className="table table-striped">
                  <tbody>
                    <tr className={styles.outcomeswrap}>
                      <td className={styles.tdbox}>
                        <b>Title:</b> {outcome.expenses}
                      </td>

                      <td className={styles.tdboxmail}>
                        <b>NOK:</b>
                        {outcome.expensesnumber}
                      </td>

                      <td className={styles.tdbox}>
                        {/*    <DeleteButtonIncomes */}
                        {/*    id={outcome.id}
                        lastname={outcome.lastname}
                        firstname={outcome.firstname}
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
