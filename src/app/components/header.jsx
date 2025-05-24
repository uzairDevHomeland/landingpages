import React from "react";
import Link from "next/link";
import Image from "next/image";
function Header() {
  return (
    <div className="flex justify-between items-center p-4 text-white bg-[#151E34] sticky top-0 left-0 right-0 z-10">
      <Image
        className="h-[50px] w-[133px]"
        src="/Atlan Logo.png"
        alt="Vercel logomark"
        width={300}
        height={40}
      />

      <ul className="space-x-10 lg:flex hidden">
        <li className="xl:text-xl text-base">
          <a href="#main" className="hover:text-blue-500 transition-colors">
            Main
          </a>
        </li>
        <li className="xl:text-xl text-base">
          <a href="#about" className="hover:text-blue-500 transition-colors">
            About
          </a>
        </li>
   <li className="xl:text-xl text-base">
          <a href="#payment" className="hover:text-blue-500 transition-colors">
            Payment Plan
          </a>
        </li>
        <li className="xl:text-xl text-base">
          <a
            href="#amenities"
            className="hover:text-blue-500 transition-colors"
          >
            Amenities
          </a>
        </li>
           <li className="xl:text-xl text-base">
          <a href="#location" className="hover:text-blue-500 transition-colors">
            Location
          </a>
        </li>
        <li className="xl:text-xl text-base">
          <a href="#brochure" className="hover:text-blue-500 transition-colors">
            Brochure
          </a>
        </li>
  
      </ul>

      <div className="flex space-x-4 text-xl items-center">
        <a href="tel:+971556610000"> +971 55 661 0000</a>

        <a
          href="https://api.whatsapp.com/send/?phone=971556610000&text=I want to know more Details about Altan&type=phone_number&app_absent=0"
          target="_blank"
          rel="noopener noreferrer"
          title="Contact us on WhatsApp"
          className="whatsapp-link"
          role="link"
          aria-label="Contact via WhatsApp"
        >
          <Image
            src="/whatapplogo.svg"
            alt="WhatsApp logo"
            width={26}
            height={26}
            className="whatsapp-icon"
          />
        </a>
      </div>
    </div>
  );
}

export default Header;
