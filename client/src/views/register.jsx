export default function Register() {
  const onSubmit = (data) => {
    console.table(data);
  };
  return (
    <>
      <div className="bg-zinc-300 h-32 pt-12">
        <div className="flex justify-around">
          <h1 className="text-sm w-1/2 font-bold">
            Complete sus datos personales
          </h1>
          <div className="flex flex-col justify-center items-center text-sm">
            <div className="rounded-full h-12 w-12 bg-zinc-800" />
            <h2>Subir foto</h2>
          </div>
        </div>
      </div>

      <form className="flex flex-col w-[95%] mx-auto gap-y-3 mt-4 mb-8">
        <div>
          <label>Nombres y apellidos</label>
          <input type="text" />
        </div>
        <div>
          <label>Número de identificación</label>
          <input type="text" />
        </div>
        <div>
          <label>País de origen</label>
          <input type="text" />
        </div>

        <div>
          <label>Seleccione su tipo de entidad</label>
          <div className="flex justify-evenly">
            <div>
              <input
                type="radio"
                id="private"
                name="entityType"
                value="private"
              />
              <label htmlFor="private">Privada</label>
            </div>
            <div>
              <input
                type="radio"
                id="public"
                name="entityType"
                value="public"
              />
              <label htmlFor="public">Pública</label>
            </div>
          </div>
        </div>
        <div>
          <label>Nombre de su entidad</label>
          <input type="text" />
        </div>
        <div>
          <label>Celular</label>
          <input type="text" />
        </div>
        <div>
          <label>E-mail</label>
          <input type="text" />
        </div>

        <input
          type="submit"
          value="Registrate"
          className="bg-zinc-800 text-zinc-200 rounded-full h-12 mt-4"
        />
      </form>
    </>
  );
}
