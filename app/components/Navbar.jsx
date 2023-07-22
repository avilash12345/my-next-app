"use client";
import React, { useState } from "react";
import Link from "next/link";
//import styles from '@/app/components/nav.modules.css'

const Navbar = () => {
  const [token, setToken] = useState(true);

  const handlelogout = () => {
    setToken(false);
  };
  return (
    <div className="flex justify-around bg-blue-900 text-white p-4">
      <section className="font-bold text-2xl"> LOGO</section>
      <section className="flex justify-between ">
        <div className="flex justify-evenly items-center mx-auto">
          <Link
            className="font-bold hover:text-pink-600  ease-in-out duration-300"
            href="/"
          >
            Home
          </Link>
          <Link
            className=" ml-4 font-bold hover:text-pink-600  ease-in-out duration-300"
            href="/about"
          >
            About
          </Link>
          <Link
            className=" ml-4 font-bold hover:text-pink-600 ease-in-out duration-300"
            href="/contact"
          >
            Contact
          </Link>
        </div>
      </section>
      <section className="justify-around flex">
        {token ? (
          <>
            <Link
              className="font-bold  hover:text-pink-600 ease-in-out duration-300"
              onClick={handlelogout}
              href={"#"}
            >
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link
              className="font-bold  hover:text-pink-600 ease-in-out duration-300"
              href={"/login"}
            >
              Login
            </Link>
            <Link
              href={"/signup"}
              className="mx-2 font-bold  hover:text-pink-600 ease-in-out duration-300"
            >
              Signup
            </Link>
          </>
        )}
      </section>
    </div>
  );
};

export default Navbar;
