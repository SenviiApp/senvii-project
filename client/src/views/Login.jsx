import { useState } from "react";
import logo from "../assets/senvii-logo.svg";
import { login } from "../services";
import { Link } from "react-router-dom";

const Login = () => {
  const initialForm = {
    email: "",
    password: "",
  };
  const [form, setForm] = useState(initialForm);
  const onChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await login(form);
    console.log(response);
  };

  return (
    <div className="h-screen grid items-center loginBg">
      <div className="login-container">
        <div>
          <center>
            <img src={logo} alt="logo" className="w-40" />
          </center>
          <h2 className="-mt-1 mb-3">Tu consultor vial inteligente</h2>
        </div>

        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-y-1">
          <input
            type="text"
            placeholder="E-mail"
            className="form-input shadow-sm"
            name="email"
            onChange={onChange}
          />
          <input
            type="password"
            placeholder="Contraseña"
            className="form-input shadow-sm"
            name="password"
            onChange={onChange}
          />
          <input
            type="submit"
            value="Iniciar Sesión"
            className="p-2 bg-blue-400 rounded-full shadow-lg mt-4 w-full"
          />
        </form>
        <div className="flex flex-col mt-2">
          <Link
            to="/forgot-password"
            className="text-sky-200 py-2 hover:underline"
          >
            ¿Olvidaste tu contraseña?
          </Link>
          <div className="border-zinc-100/40 border w-full"></div>
          <p className="flex gap-x-2 items-center justify-center text-sm">
            ¿No tienes una cuenta?
            <Link to="/register" className="text-sky-200 py-2 hover:underline">
              Registrate
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
