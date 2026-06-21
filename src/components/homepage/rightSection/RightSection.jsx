"use client";
import { authClient } from "@/lib/auth-client";
import { FaGithub, FaGoogle } from "react-icons/fa";

const RightSection = () => {
  const handleSigninWithGoogle = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
    console.log(data)
  };

  const handleSigninWithGithub=async ()=>{
    const data = await authClient.signIn.social({
        provider: "github"
    })
  }
  return (
    <div>
      <div>
        <h1 className="mb-2 font-bold text-lg">Login With</h1>
        <div className="flex flex-col gap-4">
          <button
            className="btn border-blue-500 text-blue-500 font-normal"
            onClick={handleSigninWithGoogle}
          >
            <FaGoogle />
            Login with Google
          </button>
          <button className="btn border-black" onClick={handleSigninWithGithub}>
            <FaGithub />
            Login with Github
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightSection;
