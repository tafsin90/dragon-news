"use client";
import Image from "next/image";
import Link from "next/link";
import User from "@/assets/user.png";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;
  // console.log(session)
  // console.log(user)

  return (
    <div className="w-10/12 mx-auto flex justify-between items-center mt-8">
      <div></div>

      <ul className="flex gap-4">
        <li>
          <NavLink href={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink href={"/about"}>About</NavLink>
        </li>
        <li>
          <NavLink href={"/career"}>Career</NavLink>
        </li>
      </ul>

      {isPending ? (
        <div className="w-65 text-center">
          <span className="loading loading-ring loading-lg"></span>
        </div>
      ) : user ? (
        <div className="flex gap-4 items-center">
          <h2>Hello, {user.name}</h2>
          <Image src={user.image || User} alt="User" width={40} height={30} />
          <button className="btn btn-neutral w-24" onClick={async ()=>await authClient.signOut()}>
            Logout
          </button>
        </div>
      ) : (
        <div className="flex gap-4 items-center">
          <Image src={User} alt="User" width={40} height={30} />
          <button className="btn btn-neutral w-24">
            <Link href={"/login"}>Login</Link>
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
