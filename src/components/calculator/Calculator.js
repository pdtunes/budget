import { useState, useEffect } from "react";
import { BASE_URL, OUTCOMES_ENDPOINT } from "../../constants/api";
import useAxios from "../../hooks/useAxios";
import { Container } from "react-bootstrap";
import styles from "./Calculator.module.css";
import moment from "moment";

export default function Calculator() {
  const [incomes, setIncomes] = useState([]);
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
        <h1> Incomes </h1>
        <div className={styles.incomeswrap}>
          {incomes.map((income) => {
            console.log(incomes);
            const fromDate = moment(income.datefrom).format("DD MM YYYY");
            const toDate = moment(income.dateto).format("DD MM YYYY");
            return (
              <div
                className={styles.incomeswrap}
                className="table-responsive"
                key={income.id}
              >
                <b>
                  Income: {income.hotelname}
                  {income.babname}
                  {income.ghname}
                </b>
                <table className="table table-striped">
                  <tbody>
                    <tr className={styles.incomeswrap}>
                      <td className={styles.tdbox}>
                        <b>Name:</b> {income.lastname}, {income.firstname}
                      </td>

                      <td className={styles.tdboxmail}>
                        <b>Email:</b> <br />
                        {income.email}
                      </td>
                      <td className={styles.tdbox}>
                        <b>Telephone:</b> {income.telephone}
                      </td>
                      <td className={styles.tdbox}>
                        <b>
                          Period: <br />{" "}
                        </b>{" "}
                        {fromDate} {toDate}
                      </td>

                      <td className={styles.tdbox}>
                        <b>
                          Persons:
                          <br />
                        </b>{" "}
                        {income.persons}
                      </td>
                      <td className={styles.tdboxmessage}>
                        <b>Message:</b> <br /> {income.message}
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
