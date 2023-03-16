import Background from "./Background";
import senvii from "../assets/senviiAnimated.gif";
import { getSelectionDescription } from "../../data/options";

const Report = ({ form, setForm, setCurrent, setFormFull }) => {
  return (
    <>
      <div className="flex flex-col items-center p-4 bg-white/30 z-10 w-[90%] mx-auto rounded-lg backdrop-blur-sm shadow-lg">
        <img src={senvii} alt="" className="z-10 w-52" />
        <h2 className="text-center p-4 z-10">
          Estás a un paso de{" "}
          <span className="font-semibold">
            de generar tu diagnóstico vial con SENVII
          </span>
        </h2>
      </div>
      <button
        className="z-10 bg-black text-white mx-5 mt-6 px-4 text-center py-2 rounded-full"
        onClick={() => {
          setForm({ ...form, via: getSelectionDescription(form) });
          setFormFull(true);
          setCurrent("appReport");
        }}
      >
        Generar Reporte
      </button>
    </>
  );
};

export default Report;
