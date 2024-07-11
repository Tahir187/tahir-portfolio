"use client";
import React, { useState } from "react";
import Container from "../container/page";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  const [showNav, setShowNav] = useState(false);
  const whatsappLink = `https://wa.me/+923123722671`;
  return (
    <div>
      <Container>
        <div className="text-white  bg-transparent py-5">
          <div className="flex justify-center items-center max-lg:justify-center max-lg:flex-row-reverse">
            <div className="flex justify-between items-center max-lg:w-full">
              <Link href={"/"}>
                <h3 className="text-3xl font-bold">M.T</h3>
              </Link>
              <button
                type="button"
                onClick={() => setShowNav(!showNav)}
                className="lg:hidden cursor-pointer"
              >
                <div
                  className={`w-[23px] h-[2px] transition ease-in duration-150 bg-white ${
                    showNav
                      ? "rotate-45 mb-0 translate-y-[1px]"
                      : "rotate-0 mb-1"
                  }`}
                ></div>
                <div
                  className={`w-[23px] h-[2px] transition ease-in duration-150 bg-white ${
                    showNav ? "hidden mb-0" : "mb-1"
                  }`}
                ></div>
                <div
                  className={`w-[23px] h-[2px] transition ease-in duration-150 bg-white ${
                    showNav ? "-rotate-45 mb-0" : "rotate-0"
                  }`}
                ></div>
              </button>
            </div>
            <div
              className={`flex w-full max-lg:absolute transition ease-in duration-200 top-20 z-40 ${
                showNav
                  ? "max-lg:translate-x-0 max-lg:scale-100"
                  : "max-lg:max-h-0 max-lg:scale-y-50 max-lg:translate-y-1/4"
              }`}
            >
              <div className="flex justify-between max-lg:flex-col lg:items-center max-sm:w-10/12 max-sm:mx-auto sm:ml-auto max-lg:w-[320px] lg:w-full max-lg:max-h-[500px] overflow-y-auto lg:mb-0 max-lg:bg-white max-lg:rounded-lg">
                <nav className="mt-0 px-3 lg:flex lg:justify-center lg:items-center lg:px-6 text-[15.5px] mb-0 max-lg:py-10 max-lg:px-5">
                  <ul className="flex lg:items-center lg:space-x-6 max-lg:flex-col max-lg:text-neutral-700 max-lg:text-xl max-lg:font-medium max-lg:space-y-6 max-lg:h-auto overflow-y-auto">
                    <Link href={'/'}><li>Home</li></Link>
                    <Link href={'/about'}><li>About</li></Link>
                    <Link href={'/projects'}><li>Projects</li></Link>
                    <Link href={'/experience'}><li>Experience</li></Link>
                    <Link href={'/skills'}><li>Skills</li></Link>
                  </ul>
                </nav>
                <div className="flex lg:items-center lg:space-x-2 max-lg:flex-col max-lg:text-neutral-700 max-lg:text-xl max-lg:font-medium max-lg:space-y-6 max-lg:h-auto overflow-y-auto mb-4">
                  <Link href={whatsappLink}>
                    <button className="py-2 px-4 ml-4 lg:mt-5 border-[1px] rounded-md text-white max-lg:bg-neutral-700">
                      Hire Me
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
