import styles from "../styles/register.module.css";
import { BiChevronLeft } from "react-icons/bi";
import { BsFillFileEarmarkTextFill } from "react-icons/bs";
import { useState } from "react";
import image_placeholder from "../assets/no_image.jpg";
import { registerFormModel } from "../models";
// import { getImageData } from "../utils";

export default function Register() {
  // form handlers
  const [form, setForm] = useState({
    entity_type: "",
    full_name: "",
    identification_number: null,
    country: "",
    entity_type: "",
    entity_name: "",
    phone: null,
    email: "",
    password: "",
    confirmed_password: "",
    image: null,
  });
  const onChange = (name, value) => {
    setForm((data) => {
      return { ...data, [name]: value };
    });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    console.table(form);
    // event.target.reset();
  };

  // image preview handlers
  const [imagePreview, setImagePreview] = useState(null);
  const onImageChange = ({ target }) => {
    const url = URL.createObjectURL(target.files[0]);
    setImagePreview(url);
  };

  return (
    <>
      <header className="bg-zinc-300  py-8">
        <div className="mx-auto w-form relative">
          {/* login anchor */}
          <button className="flex items-center gap-x-2 absolute top-0 left-0 rounded-full max-sm:bg-zinc-100/60 hover:bg-zinc-100 ease-out transition-colors pl-1 py-1 pr-2">
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-zinc-400 text-2xl grid place-items-center rounded-full">
              <BiChevronLeft />
            </div>
            <span className="text-sm">Login</span>
          </button>

          {/* image load */}
          <div className="pt-8">
            <label
              htmlFor="image"
              className="hover:underline lg:hover:bg-zinc-200/80 flex flex-col items-center justify-center w-fit mx-auto p-2 rounded-lg text-sm text-zinc-600 transition-colors ease-out duration-300"
            >
              <input
                type="file"
                accept="image/*"
                hidden
                id="image"
                onChange={onImageChange}
              />
              <img
                src={imagePreview || image_placeholder}
                alt="profile picture"
                className="rounded-full h-28 w-28 bg-zinc-800 mb-2 shadow-lg"
              />
              <span>Subir foto</span>
            </label>
          </div>
        </div>
      </header>

      <section>
        <form
          className="flex flex-col gap-y-4 mt-4 mb-8  mx-auto w-form"
          onSubmit={onSubmit}
        >
          <h2 className="mb-4 text-zinc-700 flex gap-x-2 items-center">
            <BsFillFileEarmarkTextFill className="text-sm" />
            <span>Completa el formulario con tus datos</span>
          </h2>

          <div>
            <label className={styles.label}>Nombres y apellidos</label>
            <input
              type="text"
              onChange={({ target }) =>
                onChange(registerFormModel.full_name, target.value)
              }
            />
          </div>

          <div>
            <label className={styles.label}>Número de identificación</label>
            <input
              type="text"
              onChange={({ target }) =>
                onChange(registerFormModel.identification_number, target.value)
              }
            />
          </div>

          <div>
            <label className={styles.label}>País de origen</label>
            <input
              type="text"
              onChange={({ target }) =>
                onChange(registerFormModel.country, target.value)
              }
            />
          </div>

          <div>
            <label className={styles.label}>
              Seleccione su tipo de entidad
            </label>
            <div className="p-2 bg-zinc-300 rounded-md mt-1 h-12 text-sm">
              <div className="rounded-[4px] h-full relative z-10">
                <div
                  className={`absolute w-1/2 h-full bg-zinc-100 transition-transform duration-200 ${
                    form.entity_type === "private" && "translate-x-[100%]"
                  } rounded-md`}
                ></div>
                <div className="w-full grid grid-cols-2 rounded-[4px] h-full z-20 absolute">
                  <span
                    onClick={() =>
                      onChange(registerFormModel.entity_type, "public")
                    }
                    className="text-zinc-700 grid place-items-center cursor-default md:cursor-pointer"
                    disabled={form.entity_type === "public"}
                  >
                    Pública
                  </span>
                  <span
                    onClick={() =>
                      onChange(registerFormModel.entity_type, "private")
                    }
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
            <input
              type="text"
              onChange={({ target }) =>
                onChange(registerFormModel.entity_name, target.value)
              }
            />
          </div>

          <div>
            <label className={styles.label}>Celular</label>
            <input
              type="text"
              onChange={({ target }) =>
                onChange(registerFormModel.phone, target.value)
              }
            />
          </div>

          <div>
            <label className={styles.label}>E-mail</label>
            <input
              type="text"
              onChange={({ target }) =>
                onChange(registerFormModel.email, target.value)
              }
            />
          </div>

          <div>
            <label className={styles.label}>Contraseña</label>
            <input
              type="text"
              onChange={({ target }) =>
                onChange(registerFormModel.password, target.value)
              }
            />
          </div>

          <div>
            <label className={styles.label}>Confirmar contraseña</label>
            <input
              type="text"
              onChange={({ target }) =>
                onChange(registerFormModel.confirmed_password, target.value)
              }
            />
          </div>

          <input
            type="submit"
            value="Registrarse"
            className="bg-zinc-800 text-zinc-200 rounded-full h-14 mt-4"
          />
        </form>
      </section>
    </>
  );
}
