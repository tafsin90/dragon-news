"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  // console.log(errors);

  const handleRegister = async (data) => {
    // console.log(data);
    const { name, email, password, photo } = data;

    const {data:res,error} = await authClient.signUp.email({
      name: name,
      email: email, // required
      password: password, // required
      image: photo,
      callbackURL: "/",
    });

    console.log(res, error)
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
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-base">Password</legend>
            <input
              type="password"
              // name="password"
              {...register("password", {
                required: "password field is required",
              })}
              className="input"
              placeholder="Enter your password"
            />
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
