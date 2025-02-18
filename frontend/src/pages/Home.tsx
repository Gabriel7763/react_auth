import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Button, Container, Card } from "react-bootstrap";

const Home = () => {
  const { user, logout } = useContext(AuthContext)!;
  const navigate = useNavigate();

  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-4 text-center shadow" style={{ width: "25rem" }}>
        {user ? (
          <>
            <h2>Bem-vindo, {user.name}!</h2>
            <Button
              variant="danger"
              onClick={() => {
                logout();
                navigate("/login");
              }}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <h2>Você precisa fazer login</h2>
            <Button variant="primary" onClick={() => navigate("/login")}>
              Ir para Login
            </Button>
          </>
        )}
      </Card>
    </Container>
  );
};

export default Home;
