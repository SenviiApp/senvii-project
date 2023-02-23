import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import PopUp from "../components/PopUp";
import { AnimatePresence } from "framer-motion";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [success, setSucces] = useState(true);

  const modalHandler = async(e) => {
    e.preventDefault();
    setOpen(true);
    setTimeout(() => {
      navigate("/login");
    }, 5000);

    const data = await fetch("http://localhost:3001/api/auth/forgot-password")
      .then((res) => res.json())
      .then((res) => {
        res.success ? setSucces(true) : setSucces(false)
      });

    console.log(data);
  };

  return (
    <div className="h-screen bg-slate-800 grid items-center shadow-lg loginBg">
      <div className="backdrop-blur-sm bg-slate-800/60 text-white w-[90%] mx-auto text-center p-8 space-y-6 flex flex-col justify-center items-center rounded-lg">
        <h1 className="text-lg">¿Olvidaste tu contraseña?</h1>

        <form action="" className="flex flex-col space-y-2">
          <input
            type="text"
            placeholder="Ingrese su email"
            className="p-2 border-2 border-blue-400 text-slate-900 font-medium"
          />
          <input
            type="submit"
            onClick={modalHandler}
            className="p-2 bg-blue-400 rounded-full shadow-lg"
            value="Restablecer"
          />
        </form>
        <a href="/login" className="text-blue-200">
          Volver
        </a>
      </div>
      <AnimatePresence>{open && <PopUp state={success} />}</AnimatePresence>
    </div>
  );
};

export default ForgotPassword;
