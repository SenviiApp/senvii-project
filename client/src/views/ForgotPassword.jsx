import React from "react";

const ForgotPassword = () => {
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
          <button className="p-2 bg-blue-400 rounded-full shadow-lg">
            Reestablecer
          </button>
        </form>
        <a href="/login" className="text-blue-200">Volver</a>
      </div>
    </div>
  );
};

export default ForgotPassword;
