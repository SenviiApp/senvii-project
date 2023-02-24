import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import PopUp from "../components/PopUp";
import { AnimatePresence } from "framer-motion";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [success, setSucces] = useState(true);
  const [email, setEmail] = useState({ email: "" });

  const modalHandler = async (e) => {
    e.preventDefault();
    const url = "http://localhost:3001/api/auth/forgot-password";

    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(email), // body data type must match "Content-Type" header
    })
      .then((res) => res.json())
      .then((res) => {
        res.success === true ? setSucces(true) : setSucces(false);
        setOpen(true);
        res.success === true
          ? setTimeout(() => {
              navigate("/login");
            }, 5000)
          : setTimeout(() => {
              setOpen(false);
            }, 3000);
      })
      .catch((error) => {
        setSucces(false);
        setOpen(false);
        setTimeout(() => {
          navigate("/login");
        }, 5000);
      });
  };

  return (
    <div className="h-screen bg-slate-800 grid items-center shadow-lg loginBg">
      <div className="login-container">
        <h1 className="text-lg">¿Olvidaste tu contraseña?</h1>

        <form className="flex flex-col gap-y-4">
          <input
            type="text"
            placeholder="Ingrese su email"
            className="form-input"
            value={email.email}
            onChange={(e) => setEmail({ email: e.target.value })}
          />
          <input
            type="submit"
            onClick={modalHandler}
            className="p-2 bg-blue-400 rounded-full shadow-lg cursor-pointer"
            value="Restablecer"
          />
        </form>
        <Link
          to="/login"
          className="text-sky-200 p-2 hover:underline w-fit mx-auto"
        >
          Volver
        </Link>
      </div>
      <AnimatePresence>{open && <PopUp state={success} />}</AnimatePresence>
    </div>
  );
};

export default ForgotPassword;
