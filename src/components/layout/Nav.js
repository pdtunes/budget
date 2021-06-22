import { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { Container, Navbar, Nav } from "react-bootstrap";
import styles from "./Nav.module.css";
import { FiLogIn } from "react-icons/all";

function Navigaton() {
  const [auth, setAuth] = useContext(AuthContext);
  const history = useHistory();
  function logout() {
    setAuth(null);
    history.push("/");
  }
  return (
    <Container className="main">
      <Navbar className={styles.navbar} expand="lg">
        <Navbar.Brand href="/"></Navbar.Brand>
        <Nav className="mr-auto">
          <Link className={styles.link} to="/">
            Home
          </Link>
        </Nav>
        {auth ? (
          <>
            <button className={styles.button} onClick={logout}>
              Logout <FiLogIn />
            </button>
          </>
        ) : (
          <Link to="/loginpage">
            Login <FiLogIn />
          </Link>
        )}
      </Navbar>
    </Container>
  );
}

export default Navigaton;
