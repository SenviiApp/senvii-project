import logo from "../../assets/logo.png";
import { FaSearch, FaPowerOff, FaPercent } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { useNavigate, useLoaderData } from "react-router-dom";
import { endSession } from "../../utils";

export default function Home() {
  const navigate = useNavigate();
  const { id, userName, image } = useLoaderData();

  const logout = async () => {
    await endSession();
    navigate("/login");
  };
  return (
    <>
      <main className="h-screen w-full mx-auto loginBg flex flex-col items-center justify-evenly">
        <header className="">
          <img src={logo} alt="" className="w-28" />
        </header>

        <section id="user" className="w-full">
          <div className="flex flex-col items-center space-y-1">
            <img
              src={image.url}
              alt="user"
              className="rounded-full w-24 h-24 shadow-2xl object-cover object-center"
            />
            <a href="#" className="text-xs">
              Editar mis datos
            </a>
          </div>
        </section>

        <section id="tools" className="w-full">
          <div className="flex flex-col space-y-4 h-64 w-[90%] mx-auto rounded-lg p-6 justify-around">
            <div className="flex flex-col items-center">
              <h2>
                Hola,{" "}
                <span className="font-bold text-dark-800">{userName}</span>
              </h2>
              <h3>¿Qué herramienta usarás?</h3>
            </div>
            <a
              href="#"
              className="border-light-500 border-2 shadow-lg py-4 px-4 bg-white rounded-full text-center font-semibold text-light-500 flex justify-center items-center text-sm relative"
            >
              <span className="inline-flex mr-2">
                <FaSearch />
              </span>{" "}
              Diagnóstico Vial
              <span className="absolute right-2 top-5">
                <MdOutlineArrowForwardIos />
              </span>
            </a>
            <a
              href="#"
              className="border-light-500 border-2 shadow-lg  py-4 px-4 bg-white rounded-full text-center font-semibold text-light-500 flex justify-center items-center text-sm relative"
            >
              <span className="inline-flex mr-2">
                <FaPercent />
              </span>{" "}
              Calculadora de Proyectos
              <span className="absolute right-2 top-5">
                <MdOutlineArrowForwardIos />
              </span>
            </a>
            <a
              href="#"
              className="border-light-500 border-2 shadow-lg  py-4 px-4 bg-white rounded-full text-center font-semibold text-light-500 flex justify-center items-center text-sm relative"
            >
              <span className="inline-flex mr-2">
                <GiArchiveRegister className="text-xl" />
              </span>{" "}
              Manual de Normas Viales
              <span className="absolute right-2 top-5">
                <MdOutlineArrowForwardIos />
              </span>
            </a>
          </div>
        </section>

        <section id="cerrarSesión">
          <div>
            <button
              onClick={logout}
              className="text-red-500 text flex items-center"
            >
              <span className="inline-flex mr-2">
                <FaPowerOff className="text-lg" />
              </span>
              Cerrar sesión
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
