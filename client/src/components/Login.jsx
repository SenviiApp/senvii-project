import React from "react";

const Login = () => {



  return (
    <div className="h-screen bg-slate-800 grid items-center shadow-lg loginBg">
      <div className="backdrop-blur-sm bg-slate-800/60 text-white w-[90%] mx-auto text-center p-10 space-y-2 flex flex-col justify-center items-center rounded-lg">
        <h1 className="text-3xl">SENVI</h1>
        <h2 className="">Tu consultor vial inteligente</h2>

        <form action="" className="flex flex-col space-y-2">
          <input type="text" placeholder="Ingrese su email" className="p-2 border-2 border-blue-400"/>
          <input type="text" placeholder="Ingrese su password" className="p-2 border-2 border-blue-400"/>
          <button className="p-2 bg-blue-400 rounded-full shadow-lg">Inicia Sesión</button>
        </form>
      <div className="flex text-xs space-x-1">
        <p>¿Olvidaste tu contraseña?</p>
        <a href="" className="text-blue-300">Click aquí</a>
      </div>
      <div className="flex text-xs space-x-1">  
        <p>¿No tenés cuenta?</p>
        <a href="" className="text-blue-300">Regístrate aquí</a>
      </div>
      </div>
    </div>
  );
};

export default Login;
