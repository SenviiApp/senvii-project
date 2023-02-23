import React from "react";
import logo from "../assets/logo.png"

const Login = () => {
  return (
    <div className="h-screen bg-slate-800 grid items-center shadow-lg loginBg">
      <div className="backdrop-blur-sm bg-slate-800/60 text-white w-[90%] mx-auto text-center p-10 space-y-2 flex flex-col justify-center items-center rounded-lg">
        <div>
          <img src={logo} alt="logo" className="pr-2"/>
          <h2 className="">Tu consultor vial inteligente</h2>
        </div>

        <form action="" className="flex flex-col gap-y-1">
          <input
            type="text"
            placeholder="Ingrese su email"
            className="p-2 border-2 border-blue-400 text-slate-900 font-medium"
          />
          <input
            type="text"
            placeholder="Ingrese su password"
            className="p-2 border-2 border-blue-400 text-slate-900 font-medium"
          />
          <input
            type="submit"
            value="Iniciar Sesión"
            className="p-2 bg-blue-400 rounded-full shadow-lg mt-4"
          />
        </form>
        <div className="text-sm flex flex-col pt-4">
          <a href="/forgot-password" className="text-blue-200">
            ¿Olvidaste tu contraseña?
          </a>
          <a href="/register" className="text-blue-200 ">
            ¿No tenés cuenta?
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
