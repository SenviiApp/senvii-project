import gridBg from "../assets/prama.jpg";

export default function ResponsiveSideBanner() {
  return (
    <>
      <div className="bg-dark-800 w-full h-full hidden lg:block relative col-span-2">
        <img
          src={gridBg}
          alt="prama"
          className="absolute w-full h-full object-cover top-0"
        />
        <div className="absolute w-full h-full bg-black/60 top-0"></div>
      </div>
    </>
  );
}
