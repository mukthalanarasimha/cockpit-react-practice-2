import LoginLogo from "../images/leftside-bg.svg";
import { Btn } from "../share_module/button";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const buttonProperties = {
    name: "Login",
    type: "submit",
    class:
      "cursor-pointer w-full mt-6 h-10 rounded-md roundex bg-primary-600 text-white hover:shadow-lg focus:bg-primary-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-800  active:shadow-lg transition duration-150 ease-in-out",
  };

  const onSubmit = (data) => {
    console.log(data);
    navigate("/dashboard");
  };
  return (
    <div className="flex h-screen ">
      <div className="w-2/3">
        <img
          src={LoginLogo}
          alt="login page"
          className="h-[100%] w-full object-cover"
        />
      </div>
      <div className="w-2/5 flex items-center   bg-[#111115] p-16">
        <form className="w-2/3" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-3 w-full">
            <p className="text-2xl text-secondary-50 font-bold mt-6">Log in</p>
            <div className="flex flex-col gap-3">
              <div className="flex  flex-col gap-2">
                <label className=" text-secondary-50 font-medium text-sm 4xl:!text-4xl mb-1 4xl:!mb-2">
                  Email
                </label>
                <input
                  {...register("email")}
                  type="text"
                  className="inputs"
                  placeholder="you@example.com"
                />
              </div>
              <div className="flex  flex-col gap-2">
                <label className=" text-secondary-50 font-medium text-sm 4xl:!text-4xl mb-1 4xl:!mb-2">
                  Password
                </label>
                <input
                  {...register("password")}
                  type="text"
                  className="inputs"
                  placeholder="Enter Your Password"
                />
              </div>
            </div>
          </div>

          <div>
            <Btn
              name={buttonProperties.name}
              type={buttonProperties.type}
              class={buttonProperties.class}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
