import styles from "../styles/register.module.css";
import { BiChevronsLeft } from "react-icons/bi";
import { useState } from "react";
import image_placeholder from "../assets/no_image.jpg";

export default function Register() {
  const [form, setForm] = useState({
    entity_type: "",
  });
  const [imagePreview, setImagePreview] = useState(image_placeholder);
  const onChange = (name, value) => {
    setForm((data) => {
      return { ...data, [name]: value };
    });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    event.target.reset();
  };

  return (
    <>
      <header className="bg-zinc-300  py-8">
        <div className="mx-auto w-form relative">
          <button className="flex items-center gap-x-2 absolute top-0 left-0 rounded-full max-sm:bg-zinc-100 hover:bg-zinc-100 ease-out transition-colors pl-1 py-1 pr-2">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-zinc-400 text-2xl grid place-items-center rounded-full">
              <BiChevronsLeft />
            </div>
            <span className="text-sm">Volver</span>
          </button>

          <div className="pt-8 flex flex-col justify-center items-center text-sm">
            <input type="file" accept="image/*" hidden id="image" />
            <img
              src={imagePreview}
              alt="profile picture"
              className="rounded-full h-28 w-28 bg-zinc-800 mb-2 shadow-lg border-2"
            />
            <label htmlFor="image" className="hover:underline text-zinc-600">
              Subir foto
            </label>
          </div>
        </div>
      </header>

      <section className="">
        <form
          className="flex flex-col gap-y-4 mt-4 mb-8  mx-auto w-form"
          onSubmit={onSubmit}
        >
          <div>
            <label className={styles.label}>Nombres y apellidos</label>
            <input
              type="text"
              onChange={({ target }) => onChange("full_name", target.value)}
            />
          </div>
          <div>
            <label className={styles.label}>Número de identificación</label>
            <input
              type="text"
              onChange={({ target }) =>
                onChange("identification_number", target.value)
              }
            />
          </div>
          <div>
            <label className={styles.label}>País de origen</label>
            <input
              type="text"
              onChange={({ target }) => onChange("country", target.value)}
            />
          </div>

          <div>
            <label className={styles.label}>
              Seleccione su tipo de entidad
            </label>
            <div className="p-2 bg-zinc-300 rounded-md mt-1 h-12">
              <div className="rounded-[4px] h-full relative z-10">
                <div
                  className={`absolute w-1/2 h-full bg-zinc-100 transition-transform duration-200 ${
                    form.entity_type === "private" && "translate-x-[100%]"
                  } rounded-md`}
                ></div>
                <div className="w-full grid grid-cols-2 rounded-[4px] h-full z-20 absolute">
                  <span
                    onClick={() => onChange("entity_type", "public")}
                    className="text-zinc-700 grid place-items-center cursor-default md:cursor-pointer"
                    disabled={form.entity_type === "public"}
                  >
                    Pública
                  </span>
                  <span
                    onClick={() => onChange("entity_type", "private")}
                    className="text-zinc-700 grid place-items-center cursor-default md:cursor-pointer"
                    disabled={form.entity_type === "private"}
                  >
                    Privada
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <label className={styles.label}>Nombre de su entidad</label>
            <input type="text" onChange={onChange} />
          </div>
          <div>
            <label className={styles.label}>Celular</label>
            <input type="text" onChange={onChange} />
          </div>
          <div>
            <label className={styles.label}>E-mail</label>
            <input type="text" onChange={onChange} />
          </div>

          <input
            type="submit"
            value="Registrate"
            className="bg-zinc-800 text-zinc-200 rounded-full h-14 mt-4"
          />
        </form>
      </section>
    </>
  );
}
