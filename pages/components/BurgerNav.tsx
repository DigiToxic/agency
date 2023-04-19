import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

interface MobileNavProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

function MobileNav({ open }: MobileNavProps) {
  const [shouldRender, setShouldRender] = useState(open);

  useEffect(() => {
    // Render the MobileNav component only after mounting on the client-side
    setShouldRender(true);
  }, []);

  return shouldRender ? (
    <div
      className={`absolute top-0 bottom-0 left-0 h-screen w-[25%] z-20 bg-[#111111] transform ${
        open ? "-translate-y-0" : "-translate-y-full"
      } transition-transform duration-300 ease-in-out filter  `}
    >
      <div className="flex flex-col justify-start items-start mt-10 p-5">
        <a className="my-4 border-b border-[#FEF6C7] w-full">
          <Link activeClass="active" to="Index" spy={true} smooth={true}>
            <p className="text-base mb-4 font-[transducer-medium]">Lorem</p>
          </Link>
        </a>
        <a className="my-4 border-b border-[#FEF6C7] w-full">
          <Link activeClass="active" to="Middle" spy={true} smooth={true}>
            <p className="text-base mb-4 font-[transducer-medium]">Ipsum</p>
          </Link>
        </a>
        <a className="my-4 border-b border-[#FEF6C7] w-full">
          <Link activeClass="active" to="Service" spy={true} smooth={true}>
            <p className="text-base mb-4 font-[transducer-medium]">Lorem</p>
          </Link>
        </a>
        <a className="my-4 border-b border-[#FEF6C7] w-full">
          <Link activeClass="active" to="Team" spy={true} smooth={true}>
            <p className="text-base mb-4 font-[transducer-medium]">Ipsum</p>
          </Link>
        </a>
      </div>
    </div>
  ) : null;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="hidden max-[1101px]:contents">
      <MobileNav open={open} setOpen={setOpen} />
      <div>
        <div
          className="group z-50 relative w-9 h-6 mr-10 cursor-pointer flex-col justify-between items-center flex"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-[#FEF6C7] rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-2.5" : ""
            }`}
          />
          <span
            className={`h-1 bg-[#FEF6C7] rounded-lg cursor-pointer transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-[#FEF6C7] rounded-lg cursor-pointer transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-2.5" : ""
            }`}
          />
        </div>
      </div>
    </div>
  );
}
