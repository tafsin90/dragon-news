import Image from 'next/image';
import Link from 'next/link'
import User from '@/assets/user.png'
import NavLink from './NavLink';



const Navbar = () => {
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

      <div className='flex gap-4 items-center'>
        <Image src={User} alt="User" width={40} height={30} />
        <button className="btn btn-neutral w-24">
          <Link href={"/login"}>Login</Link>
        </button>
      </div>
    </div>
  );
}

export default Navbar