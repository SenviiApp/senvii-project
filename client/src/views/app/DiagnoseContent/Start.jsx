import senvii from "../../../assets/senviiAnimated.gif";

export default function Start({ scrollToSection, setCurrent }) {
  return (
    <>
      <div className="flex flex-col items-center p-4 bg-white/30 z-10 w-[90%] mx-auto rounded-lg backdrop-blur-sm shadow-lg mt-24 max-w-[600px]">
        <img src={senvii} alt="" className="z-10 w-52" />
        <h2 className="text-center p-4 z-10">
          Hola, soy <span className="font-semibold">senvii</span> y te ayudaré a{" "}
          <span className="font-semibold">generar tu diagnóstico vial</span>
        </h2>
      </div>
      <button
        onClick={() => {
          scrollToSection("main");
          setCurrent("initialForm");
        }}
        className="z-10 bg-dark-800 text-white mx-5 mt-6 px-4 text-center py-2 rounded-full"
      >
        Empezar diagnóstico
      </button>
    </>
  );
}
