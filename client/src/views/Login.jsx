import { useState } from "react";
import logo from "../assets/senvii-logo.svg";
import { login } from "../services";

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
      <div className="backdrop-blur-sm bg-slate-800/40 text-white mx-auto rounded-lg py-8 px-4 flex flex-col gap-y-2 text-center w-login-form">
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
            className="p-2 bg-blue-400 rounded-full shadow-md mt-4 w-full"
          />
        </form>
        <div className="text-sm flex flex-col pt-4 gap-y-1">
          <a href="/forgot-password" className="text-sky-200">
            ¿Olvidaste tu contraseña?
          </a>
          <a href="/register" className="text-sky-200 ">
            ¿No tenés cuenta? Registrate
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
