"use client";
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const NavLink = ({href, children}) => {
  const pathname = usePathname()
  // console.log(pathname);

  const isActive = pathname === href || (href === "/" && pathname.startsWith("/catagory/01"));
  
  return (
    <Link href={href} className={`${isActive ? 'border-b-2 border-b-purple-500' : '' }`}>{children} </Link>
  )
}

export default NavLink