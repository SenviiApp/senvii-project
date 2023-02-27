import Background from "./Background";
import senvii from "../assets/senvii01.png";

const Report = () => {
  return (
    <>
      <Background className="absolute h-screen w-full z-0" />
      <div className="flex flex-col items-center p-4 bg-white/30 z-10 w-[90%] mx-auto rounded-lg backdrop-blur-sm shadow-lg">
        <img src={senvii} alt="" className="z-10 w-52" />
        <h2 className="text-center p-4 z-10">
            Estás a un paso de <span className="font-semibold">de generar tu diagnóstico vial con SENVII</span>
        </h2>
      </div>
      <a href="" className="z-10 bg-black text-white mx-5 mt-6 px-4 text-center py-2 rounded-full">Generar Reporte</a>
    </>
  );
};

export default Report;
