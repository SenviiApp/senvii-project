import { useState } from "react";
import logo from "../assets/senvii-logo.svg";
import { login } from "../services";
import { Link } from "react-router-dom";
import { Background, ResponsiveSideBanner } from "../components";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";

const Login = () => {
  const [isVisible, setVisible] = useState(false);
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
    <div className="login-pages-container">
      {/* login container */}
      <div className="login-container">
        <Background className="h-screen absolute left-0 w-full" />
        <div className="login-form-container">
          <div>
            <center>
              <img src={logo} alt="logo" className="w-40" />
            </center>
            <h2 className="-mt-1 mb-3">Tu consultor vial inteligente</h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col gap-y-1"
          >
            <input
              type="text"
              placeholder="E-mail"
              className="form-input shadow-sm"
              name="email"
              onChange={onChange}
              value={form.email}
            />
            <div className="form-input-layout flex">
              <input
                type={isVisible ? "text" : "password"}
                placeholder="Contraseña"
                className="form-input-shape"
                name="password"
                onChange={onChange}
                value={form.password}
              />
              <span
                // type="button"
                className="flex items-center justify-center text-lg w-10 h-10 text-light-500 cursor-pointer bg-white"
                onClick={() => setVisible(!isVisible)}
              >
                {isVisible ? <BsEyeSlashFill /> : <BsEyeFill />}
              </span>
            </div>

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
              <Link
                to="/register"
                className="text-sky-200 py-2 hover:underline"
              >
                Registrate
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/* image (lg) container */}
      <ResponsiveSideBanner />
    </div>
  );
};

export default Login;
