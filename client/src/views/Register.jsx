import styles from "../styles/register.module.css";
import { BiChevronLeft, BiError } from "react-icons/bi";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { registerFormModel } from "../models";
import {
  validateRegisterSubmit,
  isFormCompleted,
  validateFields,
  simulateDelay,
  getImageData,
} from "../utils";
import { MiniLoader } from "../components";
import logo from "../assets/senvii-logo.svg";

export default function Register() {
  const image_placeholder =
    "https://res.cloudinary.com/djcc03pyc/image/upload/v1677183559/userPicture/sp5dq8c8igvxki0b8kaq.png";

  // form handlers
  const [isLoading, setLoading] = useState(false);

  const [completedForm, setFormStatus] = useState(false);
  const [errors, setErrors] = useState({
    password: false,
    email: false,
    _confirmed_password: false,
  });
  const [form, setForm] = useState({
    userName: null,
    identificationNumber: null,
    country: null,
    entityType: "Pública",
    entityName: null,
    phoneNumber: null,
    email: null,
    password: null,
    _confirmed_password: null,
    image: "no_image",
  });

  const onChange = (name, value) => {
    setForm((data) => {
      return { ...data, [name]: value };
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    let image = document.querySelector("#profile_image").files[0];
    if (image) {
      image = await getImageData(image);
    }
    const parsedUser = await validateRegisterSubmit({ ...form, image });

    event.target.reset();
    await simulateDelay(3);
    console.table(parsedUser);
    setLoading(false);
  };

  useEffect(() => {
    setFormStatus(isFormCompleted(form));
    setErrors(validateFields(form, errors));
  }, [form]);

  // image preview handlers
  const [imagePreview, setImagePreview] = useState(null);
  const onImageChange = ({ target }) => {
    const url = URL.createObjectURL(target.files[0]);
    setImagePreview(url);
  };
  // password visualization handlers
  const [isVisible, setVisible] = useState(false);
  return (
    <>
      {/* bg-zinc-300 */}
      <header className="bg-light-500 py-8">
        <div className="mx-auto w-form relative">
          {/* floating elements */}

          <div className="absolute w-full flex justify-between items-center">
            {/* login anchor */}
            <a
              href="/login"
              className="w-fit flex items-center gap-x-2 rounded-full max-sm:bg-zinc-300/40 hover:bg-zinc-300/40 ease-out transition-colors pl-1 py-1 pr-2 duration-500 cursor-pointer text-snow"
            >
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-zinc-600 text-2xl grid place-items-center rounded-full">
                <BiChevronLeft />
              </div>
              <span className="text-sm">Login</span>
            </a>
            {/* icon */}
            <img
              src={logo}
              alt="logo"
              className="w-[5.4rem] object-contain p-1"
            />
          </div>

          {/* image load */}
          <div className="pt-8">
            <label
              htmlFor="profile_image"
              className="hover:underline lg:hover:bg-zinc-200/80 flex flex-col items-center justify-center w-fit mx-auto p-2 rounded-lg text-sm text-snow transition-colors ease-out duration-300 cursor-pointer"
            >
              <input
                type="file"
                accept="image/*"
                hidden
                id="profile_image"
                onChange={onImageChange}
              />
              <img
                src={imagePreview || image_placeholder}
                alt="profile picture"
                className="rounded-full h-28 w-28 bg-zinc-800 mb-2 shadow-md object-cover object-center shadow-black"
              />
              <span>{"Subir foto (opcional)"}</span>
            </label>
          </div>
        </div>
      </header>

      <section>
        <form
          className="flex flex-col gap-y-4 mt-12 mb-20 mx-auto w-form"
          onSubmit={onSubmit}
        >
          <h2 className="mb-4 text-sky-700 flex gap-x-2 items-center text-sm">
            {
              "Completa el formulario con tus datos (todos los campos son requeridos)"
            }
          </h2>
          {/* user name */}
          <div>
            <label className={styles.label}>Nombres y apellidos</label>
            <input
              type="text"
              onChange={({ target }) =>
                onChange(registerFormModel.userName, target.value)
              }
            />
          </div>
          {/* identification number */}
          <div>
            <label className={styles.label}>Número de identificación</label>
            <input
              type="number"
              onChange={({ target }) =>
                onChange(registerFormModel.identificationNumber, target.value)
              }
            />
          </div>
          {/* country */}
          <div>
            <label className={styles.label}>País de origen</label>
            <input
              type="text"
              onChange={({ target }) =>
                onChange(registerFormModel.country, target.value)
              }
            />
          </div>
          {/* entity type */}
          <div>
            <label className={styles.label}>
              Seleccione su tipo de entidad
            </label>
            <div className="p-2 bg-dark-400 rounded-md mt-1 h-12 text-sm">
              <div className="rounded-[4px] h-full relative z-10">
                <div
                  className={`absolute w-1/2 h-full bg-light-500 transition-transform duration-300 ease-out ${
                    form.entityType === "Privada" && "translate-x-[100%]"
                  } rounded-md`}
                ></div>
                <div className="w-full grid grid-cols-2 rounded-[4px] h-full z-20 absolute">
                  <span
                    onClick={() =>
                      onChange(registerFormModel.entityType, "Pública")
                    }
                    className="text-snow grid place-items-center cursor-default md:cursor-pointer"
                    disabled={form.entityType === "Pública"}
                  >
                    Pública
                  </span>
                  <span
                    onClick={() =>
                      onChange(registerFormModel.entityType, "Privada")
                    }
                    className="text-snow grid place-items-center cursor-default md:cursor-pointer"
                    disabled={form.entityType === "Privada"}
                  >
                    Privada
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* entity name */}
          <div>
            <label className={styles.label}>Nombre de su entidad</label>
            <input
              type="text"
              onChange={({ target }) =>
                onChange(registerFormModel.entityName, target.value)
              }
            />
          </div>
          {/* phone */}
          <div>
            <label className={styles.label}>Número de teléfono</label>
            <input
              type="number"
              onChange={({ target }) =>
                onChange(registerFormModel.phoneNumber, target.value)
              }
            />
          </div>
          {/* email */}
          <div>
            <div className="flex gap-x-2 items-center">
              <label className={styles.label}>E-mail</label>
              <BiError
                className={`transition-colors ${
                  errors.email ? "text-red-500" : "text-transparent"
                }`}
              />
            </div>

            <input
              type="email"
              onChange={({ target }) =>
                onChange(registerFormModel.email, target.value)
              }
            />
          </div>
          {/* password */}
          <div>
            <div className="flex gap-x-2 items-center">
              <label className={styles.label}>Contraseña*</label>
              <BiError
                className={`transition-colors ${
                  errors.password ? "text-red-500" : "text-transparent"
                }`}
              />
            </div>

            <input
              type={isVisible ? "text" : "password"}
              onChange={({ target }) =>
                onChange(registerFormModel.password, target.value)
              }
            />
          </div>
          {/* confirm password */}
          <div>
            <div className="flex gap-x-2 items-center">
              <label className={styles.label}>Confirmar contraseña</label>
              <BiError
                className={`transition-colors ${
                  errors._confirmed_password
                    ? "text-red-500"
                    : "text-transparent"
                }`}
              />
            </div>

            <input
              type={isVisible ? "text" : "password"}
              onChange={({ target }) =>
                onChange(registerFormModel._confirmed_password, target.value)
              }
            />
          </div>

          <span
            className="flex items-center text-lg gap-x-2 ml-auto bg-light-500 px-2 py-3 rounded-md text-snow cursor-pointer"
            onClick={() => setVisible(!isVisible)}
          >
            {isVisible ? <BsEyeFill /> : <BsEyeSlashFill />}
            <span className="text-sm">
              {isVisible ? "Ocultar" : "Mostrar"} contraseñas
            </span>
          </span>
          <p
            className={`text-[.84rem] transition-colors mt-2 ${
              errors.password ? "text-red-600" : "text-zinc-500"
            }`}
          >
            * Su contraseña debe tener entre 8 y 16 caracteres y contener al
            menos un número, una letra mayúscula y una letra minúscula. No se
            permiten espacios en blanco ni otros caracteres especiales.
          </p>
          {/* submit btn */}
          <label
            htmlFor="submit"
            disabled={!completedForm}
            className="bg-dark-800 text-snow rounded-full h-14 mt-4 disabled:pointer-events-none disabled:bg-zinc-300 flex gap-x-3 items-center justify-center transition-colors"
          >
            <input type="submit" id="submit" hidden />
            Registrarse
            {isLoading && <MiniLoader />}
          </label>
        </form>
      </section>
    </>
  );
}
