import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import { motion } from "framer-motion";
import Header from "./components/Header";
import Service from "./components/Service";
import Team from "./components/Team";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";

const Home: NextPage = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const screenHeight = window.innerHeight;
      const scrollPercentage = (scrollY / screenHeight) * 100;
      setShowButton(scrollPercentage >= 5);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const screenHeight = window.innerHeight;
    const scrollPercentage = (scrollY / screenHeight) * 100;
    if (scrollPercentage < 5) {
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="Index"
      className="bg-gradient-to-b from-[#111111] to-[#36352c] h-[120vh]"
    >
      <div className="pt-4">
        <Header />
      </div>

      <div
        className="bg-gradient-to-b from-[#111111] to-[#535027] fixed py-6 px-3 bottom-[25px] right-[25px] duration-500 z-50 rounded-full cursor-pointer max-[1250px]:py-4 max-[1250px]:px-2"
        style={{
          opacity: showButton ? 1 : 0,
          visibility: showButton ? "visible" : "hidden",
        }}
        onClick={handleClick}
      >
        <img className="w-12 max-[1250px]:w-10" src="/agency/gold_arrow-01-01-01.png" alt="" />
      </div>

      <div className="flex justify-center items-center mt-36 max-[650px]:flex-col">
        <motion.div
          initial={{ opacity: 0, x: "-10%" }}
          whileInView={{ opacity: 1, x: "0%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
        >
          <p className="text-start font-[transducer-black] text-5xl w-5/6 max-[1100px]:text-4xl max-[751px]:text-3xl max-[650px]:w-full max-[650px]:mb-10">
          Caspers Labs, <br /> Your NFT <br /> Marketing Agency
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: "10%" }}
          whileInView={{ opacity: 1, x: "0%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
        >
          <img className="w-96 max-[1100px]:w-80 max-[751px]:w-72" src="/agency/caspers_logo-01.png" alt="" />
        </motion.div>
      </div>

      <div className="bg-white w-full h-[200px] flex justify-evenly items-center mt-24 max-[751px]:grid max-[751px]:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: "-10%" }}
          whileInView={{ opacity: 1, x: "0%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.2}}
        >
          <p className="font-[transducer-black] text-black text-center text-7xl max-[1100px]:text-6xl max-[951px]:text-5xl max-[500px]:text-4xl">
            33k
          </p>
          <p className="font-[transducer-hairline] text-black text-center">
            Projects Completed
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: "-80%" }}
          whileInView={{ opacity: 1, x: "0%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.4}}
        >
          <p className="font-[transducer-black] text-black text-center text-7xl max-[1100px]:text-6xl max-[951px]:text-5xl max-[500px]:text-4xl">
            10m
          </p>
          <p className="font-[transducer-hairline] text-black text-center">
            Twitter Reach
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: "-50%" }}
          whileInView={{ opacity: 1, x: "0%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6}}
        >
          <p className="font-[transducer-black] text-black text-center text-7xl max-[1100px]:text-6xl max-[951px]:text-5xl max-[500px]:text-4xl">
            69420$
          </p>
          <p className="font-[transducer-hairline] text-black text-center">
            Generated Profit
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: "-90%" }}
          whileInView={{ opacity: 1, x: "0%" }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8}}
        >
          <p className="font-[transducer-black] text-black text-center text-7xl max-[1100px]:text-6xl max-[951px]:text-5xl max-[500px]:text-4xl">
            20m
          </p>
          <p className="font-[transducer-hairline] text-black text-center">
            Discord Reach
          </p>
        </motion.div>
      </div>

      <div className="bg-[#111111] flex justify-center">
        <div className=" w-[90%] border-t-2 border-[#444138]"></div>
      </div>
      <Service />
      <div className="bg-[#111111] flex justify-center">
        <div className=" w-[90%] border-t-2 border-[#444138]"></div>
      </div>
      <Team />
      <div className="bg-[#111111] flex justify-center">
        <div className=" w-[90%] border-t-2 border-[#444138]"></div>
      </div>
      <Testimonial />
      <div className="bg-[#111111] flex justify-center">
        <div className=" w-[90%] border-t-2 border-[#444138]"></div>
      </div>
      <Contact />
    </div>
  );
};
export default Home;
