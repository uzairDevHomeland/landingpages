import React from "react";
import Link from "next/link";
import Image from "next/image";
function Header() {
  return (
    <div className="flex justify-between items-center p-4 text-white bg-black sticky top-0 left-0 right-0 z-10">
      <Image
        className="h-[37px] w-[133px]"
        src="/mainlogo.svg"
        alt="Vercel logomark"
        width={20}
        height={20}
      />

      <ul className=" space-x-12 md:flex hidden ">
        <li className="text-xl">
          <Link href="/dashboard">Main</Link>
        </li>
        <li className="text-xl">
          <Link href="/dashboard">About</Link>
        </li>
        <li className="text-xl">
          <Link href="/dashboard">Payment Plan</Link>
        </li>
        <li className="text-xl">
          <Link href="/dashboard">Brochure</Link>
        </li>
        <li className="text-xl">
          <Link href="/dashboard">Location</Link>
        </li>
        <li className="text-xl">
          <Link href="/dashboard">Developer</Link>
        </li>
      </ul>

      <div className="flex space-x-4 text-xl items-center">
        <a href="tel:+971527875808"> +971527875808</a>

        <Image
          src="/whatapplogo.svg"
          alt="Vercel logomark"
          width={26}
          height={26}
        />
      </div>
    </div>
  );
}

export default Header;
