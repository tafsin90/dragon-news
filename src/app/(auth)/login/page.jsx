"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa6";

const LoginPage = () => {
  // const handleLogin=(e)=>{
  //   e.preventDefault();
  //   const email = e.target.email.value;
  //   const pass = e.target.password.value;
  //   console.log(email, pass);
  // }

  const [showPass, setShowPass] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // console.log(errors);

  const handleLogin = async (data) => {
   console.log(data);
    const {email, password} =data;

    const { data: res, error } = await authClient.signIn.email({
      email: email,
      password: password,
      rememberMe: true,
      callbackURL: "/",
    });
  };

  return (
    <div className="bg-base-200 min-h-[85vh] flex items-center justify-center mt-5">
      <div className="bg-white p-15 rounded-lg">
        <h1 className="font-bold text-center text-3xl pb-5 border-b- border-b-gray-200">
          Login your account
        </h1>
        <form className="mt-5" onSubmit={handleSubmit(handleLogin)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-base">Email address</legend>
            <input
              type="email"
              // name="email"
              {...register("email")}
              className="input"
              placeholder="Enter your email here"
            />
          </fieldset>

          <fieldset className="fieldset relative">
            <legend className="fieldset-legend text-base">Password</legend>
            <input
              type={showPass ? "text" : "password"}
              // name="password"
              {...register("password", {
                required: "password field is required",
              })}
              className="input"
              placeholder="Enter your password"
            />
            <span
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-lg"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>

            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </fieldset>

          <button className="btn w-full bg-gray-800 border-none text-white my-2">
            Login
          </button>
        </form>
        <p className="text-center">
          Don't have an account?
          <Link href="/register" className="text-red-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
