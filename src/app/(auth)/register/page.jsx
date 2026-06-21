"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const RegisterPage = () => {

  const [showPass, setShowPass] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // console.log(errors);

  const handleRegister = async (data) => {
    // console.log(data);
    const { name, email, password, photo } = data;

    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: photo,
      callbackURL: "/",
    });

    // console.log(res, error)

    if (error) {
      alert(error.message);
    }
    if (res) {
      alert("SignUp Successful.");
    }
  };

  return (
    <div className="bg-base-200 min-h-[85vh] flex items-center justify-center mt-5">
      <div className="bg-white p-15 rounded-lg">
        <h1 className="font-bold text-center text-3xl pb-5 border-b-1 border-b-gray-200">
          Register your account
        </h1>
        <form className="mt-5" onSubmit={handleSubmit(handleRegister)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-base">Your Name</legend>
            <input
              type="text"
              // name="email"
              {...register("name")}
              className="input"
              placeholder="Enter your name here"
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-base">Photo URL</legend>
            <input
              type="text"
              // name="email"
              {...register("photo")}
              className="input"
              placeholder="Enter your photo-URL here"
            />
          </fieldset>
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
              className="absolute right-10 top-1/2 -translate-y-1/2 cursor-pointer text-lg"
              onClick={() => setShowPass(!showPass)}
            >
              {showPass ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </fieldset>
          <button className="btn w-full bg-gray-800 border-none text-white my-2">
            Register
          </button>
        </form>
        <p className="text-center">
          Already have an account?
          <Link href="/login" className="text-red-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
