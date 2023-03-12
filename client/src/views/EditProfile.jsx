import styles from "../styles/register.module.css";
import { BiChevronLeft, BiError } from "react-icons/bi";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { registerFormModel } from "../models";
import {
  isFormCompleted,
  validateFields,
  getImageData,
  simulateDelay,
} from "../utils";
import { validateEditProfile } from "../utils/validateEditProfile";
import { MiniLoader } from "../components";
import logo from "../assets/senvii-logo.svg";
import headerBg from "../assets/prama.jpg";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";
import { useNavigate, useLoaderData } from "react-router-dom";
import { editProfile } from "../services/editProfile";

export default function Register() {
  const data = useLoaderData();

  const initialForm = {
    userName: "",
    phoneNumber: "",
    image: "",
    entityName: "",
  };

  // form handlers
  const [isLoading, setLoading] = useState(false);

  const [form, setForm] = useState(initialForm);

  const onChange = (name, value) => {
    setForm((data) => {
      return { ...data, [name]: value };
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    let image = document.querySelector("#profile_image").files[0] || null;
    if (image) image = await getImageData(image);
    const parsedUser = await validateEditProfile({ ...form, image });
    await simulateDelay(3);
    const response = await editProfile(parsedUser, data.id);
    console.log(
      "🚀 ~ file: EditProfile.jsx:54 ~ onSubmit ~ response:",
      response
    );
    setLoading(false);

    if (response.success) {
      toast.success("User updated")
    } else {
      toast.error(response.code);
    }
  };

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
      <header className="bg-light-500 py-8 relative overflow-hidden">
        <img
          src={headerBg}
          alt="prama"
          className="absolute w-full h-full object-cover top-0"
        />
        <div className="absolute w-full h-full bg-black/60 top-0"></div>
        <div className="mx-auto w-form relative">
          {/* floating elements */}

          <div className="absolute w-full flex justify-between items-center">
            {/* login anchor */}
            <Link
              to="/"
              className="w-fit flex items-center gap-x-2 rounded-full max-sm:bg-zinc-300/40 hover:bg-zinc-300/40 ease-out transition-colors pl-1 py-1 pr-2 duration-500 cursor-pointer text-snow"
            >
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-zinc-600 text-2xl grid place-items-center rounded-full">
                <BiChevronLeft />
              </div>
              <span className="text-sm">Regresar</span>
            </Link>
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
              className="hover:underline lg:hover:bg-zinc-300/40 flex flex-col items-center justify-center w-fit mx-auto p-2 rounded-lg text-sm text-snow transition-colors ease-out duration-300 cursor-pointer"
            >
              <input
                type="file"
                accept="image/*"
                hidden
                id="profile_image"
                onChange={onImageChange}
              />
              <img
                src={imagePreview || data.image.url}
                alt="profile picture"
                className="rounded-full h-28 w-28 bg-zinc-800 mb-2 shadow-md object-cover object-center shadow-black"
              />
              <span>{"Cambiar foto de perfil"}</span>
            </label>
          </div>
        </div>
      </header>

      <section>
        <form
          className="flex flex-col gap-y-4 pt-12 pb-20 mx-auto w-form"
          onSubmit={onSubmit}
        >
          <h2 className="mb-4 text-sky-700 flex gap-x-2 items-center text-sm">
            {"Ingresa los campos que quieras modificar"}
          </h2>

          {/* user name */}
          <div>
            <label className={styles.label}>Nombres y apellidos</label>
            <input
              className="form-input"
              type="text"
              onChange={({ target }) =>
                onChange(registerFormModel.userName, target.value)
              }
              value={form.userName}
              placeholder={data.userName}
            />
          </div>

          {/* phone */}
          <div>
            <label className={styles.label}>Número de teléfono</label>
            <input
              className="form-input"
              type="number"
              onChange={({ target }) =>
                onChange(registerFormModel.phoneNumber, target.value)
              }
              value={form.phoneNumber}
              placeholder={data.phoneNumber}
            />
          </div>
          {/* entityName */}
          <div>
            <label className={styles.label}>Nombre de la entidad</label>
            <input
              className="form-input"
              type="text"
              onChange={({ target }) =>
                onChange(registerFormModel.entityName, target.value)
              }
              value={form.entityName}
              placeholder={data.institution.entityName}
            />
          </div>

          {/* submit btn */}
          <button
            type="submit"
            disabled={
              !imagePreview &&
              form.userName === initialForm.userName &&
              form.phoneNumber === initialForm.phoneNumber &&
              form.entityName === initialForm.entityName
            }
            className="bg-dark-800 text-snow rounded-full h-14 mt-4 disabled:pointer-events-none disabled:bg-zinc-300 flex gap-x-3 items-center justify-center transition-colors"
          >
            Guardar
            {isLoading && <MiniLoader />}
          </button>
        </form>
      </section>
    </>
  );
}
