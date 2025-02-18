import { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import "../styles/auth.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post("/register", { name, email, password });
      navigate("/login");
    } catch (err) {
      console.error("Erro ao registrar: ", err);
      setError("Erro ao registrar. Tente novamente.");
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2 className="auth-title">Sign-Up</h2>
        {error && <div className="alert alert-danger">{error}</div>}
        <form onSubmit={handleRegister}>
          <label>Name</label>
          <input
            className="form-control"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label>Email</label>
          <input
            className="form-control"
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label>Password</label>
          <input
            className="form-control"
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button className="btn btn-success w-100 mt-3" type="submit">
            Create Account
          </button>
        </form>
        <p className="terms-text">You agree to our terms and policies</p>
        <button
          className="btn btn-light w-100"
          onClick={() => navigate("/login")}
        >
          Already have an account? Log in
        </button>
      </div>
    </div>
  );
};

export default Register;
