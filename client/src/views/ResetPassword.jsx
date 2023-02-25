import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Background, ResponsiveSideBanner } from "../components";
import { BsEyeSlashFill, BsEyeFill } from "react-icons/bs";
import { useEffect } from "react";
import { $axios } from "../lib/axiosClient";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const ResetPassword = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isVisible, setVisible] = useState(false);
  const [form, setForm] = useState({
    password: "",
    _confirmed_password: "",
  });

  const onChange = ({ target }) => {
    setForm({ ...form, [target.name]: target.value });
  };

  const onSubmit = async (event) => {
    event.preventDefault();

    // verificación
    if (form.password !== form._confirmed_password) {
      // toast
    }

    try {
      const { data } = await $axios.post("/user/change-password", {
        id,
        password: form.password,
      });
      if (data.success) {
        toast.success("contraseña cambiada con exito");
      }
      return data;
    } catch (error) {
      toast.error(error.toString());
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const { data } = await $axios(`/user/${id}`);
      } catch (error) {
        console.log(error);
        navigate("/");
      }
    }

    fetchData();
  }, []);
  return (
    <div className="login-pages-container">
      <div className="login-container">
        <Background className="h-screen absolute left-0 w-full" />
        <div className="login-form-container">
          <h1 className="text-lg">Cambiar contraseña</h1>

          <form onSubmit={onSubmit} className="flex flex-col gap-y-2">
            <div className="form-input-layout flex">
              <input
                type={isVisible ? "text" : "password"}
                placeholder="Contraseña"
                className="form-input-shape"
                name="password"
                onChange={onChange}
                value={form.password}
              />
              <span
                className="flex items-center justify-center text-lg w-10 h-10 text-light-500 cursor-pointer bg-white"
                onClick={() => setVisible(!isVisible)}
              >
                {isVisible ? <BsEyeSlashFill /> : <BsEyeFill />}
              </span>
            </div>
            <div className="form-input-layout flex">
              <input
                type={isVisible ? "text" : "password"}
                placeholder="Contraseña"
                className="form-input-shape"
                name="_confirmed_password"
                onChange={onChange}
                value={form._confirmed_password}
              />
              <span
                className="flex items-center justify-center text-lg w-10 h-10 text-light-500 cursor-pointer bg-white"
                onClick={() => setVisible(!isVisible)}
              >
                {isVisible ? <BsEyeSlashFill /> : <BsEyeFill />}
              </span>
            </div>
            <input
              type="submit"
              value="Reestablecer contraseña"
              className="p-2 bg-blue-400 rounded-full shadow-lg mt-4 w-full"
            />
          </form>
          <Link to="/login" className="text-blue-200 py-2">
            Login
          </Link>
        </div>
      </div>

      <ResponsiveSideBanner />
    </div>
  );
};

export default ResetPassword;
