import Link from "next/link";
import React from "react";
import { playfair } from "@/app/layout";
import Image from "next/image";

const Navbar = () => {
  const navMenu = () => {
    return (
      <>
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About Us</Link>
        </li>
        <li>
          <Link href={"/shop"}>Shop</Link>
        </li>
        <li>
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li>
          <Link href={"/contact"}>Contact</Link>
        </li>
      </>
    );
  };

  return (
    <div className="body">
      {/* navbar */}

      <div className="navbar bg-[#f1faee] shadow-sm ">
        <div className="navbar-start ">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className=" lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>

            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navMenu()}
            </ul>
          </div>
          <div>
            <Image
              src="/assets/logo.jpg"
              alt="logo"
              width={50}
              height={50}
            />
          </div>
          <Link href={"/"} className={`${playfair.className} text-3xl`}>FlavourHub</Link>
        </div>
        <div className="navbar-center hidden lg:flex body">
          <ul className="menu menu-horizontal px-1">{navMenu()}</ul>
        </div>
        <div className="navbar-end">
          <Link href={"/contact"} className="btn btn-outline">
            Appointment
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
