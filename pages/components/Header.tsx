import React, { useState } from "react";
import type { NextPage } from "next";
import { Link } from "react-scroll";
import Navbar from "./BurgerNav";

const Header: NextPage = () => {
  
  return (
    <div className="flex justify-around items-center max-[1101px]:justify-between max-[1101px]:mr-20 max-[1101px]:ml-20 max-[530px]:mr-10 max-[530px]:ml-10">
      <Navbar />

      <div className="flex justify-around w-3/5 -mr-16 max-[1100px]:hidden">
        <Link activeClass="active" to="Services" spy={true} smooth={true}>
          <div className="font-[transducer-black] border-2 border-[#FEF6C7] rounded-2xl py-1 px-12 cursor-pointer text-white hoverButton">
            Services
          </div>
        </Link>

        <Link activeClass="active" to="Team" spy={true} smooth={true}>
          <div className="font-[transducer-black] border-2 border-[#FEF6C7] rounded-2xl py-1 px-12 cursor-pointer text-white hoverButton">
            Team
          </div>
        </Link>

        <Link activeClass="active" to="Testimonial" spy={true} smooth={true}>
          <div className="font-[transducer-black] border-2 border-[#FEF6C7] rounded-2xl py-1 px-12 cursor-pointer text-white hoverButton">
            Testimonial
          </div>
        </Link>
      </div>

      <div className="flex justify-center">
        <Link activeClass="active" to="Contact" spy={true} smooth={true}>
          <div className="font-[transducer-black] bg-[#f7e688] rounded-2xl py-1 px-12 cursor-pointer hover:scale-110 ease-in-out duration-300">
            <p className="text-black">Contact us</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
export default Header;
