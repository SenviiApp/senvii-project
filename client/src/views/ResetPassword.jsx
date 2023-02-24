import { useParams, Link } from "react-router-dom";

const ResetPassword = () => {
  const { id } = useParams();

  return (
    <div className="h-screen bg-slate-800 grid items-center shadow-lg loginBg">
      <div className="backdrop-blur-sm bg-slate-800/60 text-white w-[90%] mx-auto text-center p-10 space-y-2 flex flex-col justify-center items-center rounded-lg">
        <div>
          <h1 className="text-xl">Cambiar contraseña</h1>
        </div>

        <form action="" className="flex flex-col gap-y-1">
          <input
            type="text"
            placeholder="Nueva contraseña"
            className="p-2 border-2 border-blue-400 text-slate-900 font-medium"
          />
          <input
            type="text"
            placeholder="Reingrese contraseña"
            className="p-2 border-2 border-blue-400 text-slate-900 font-medium"
          />
          <input
            type="submit"
            value="Confirmar"
            className="p-2 bg-blue-400 rounded-full shadow-lg mt-4"
          />
        </form>
        <div className="text-sm flex flex-col pt-4">
          <Link href="/login" className="text-blue-200 ">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
