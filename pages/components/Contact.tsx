import React, { useRef } from "react";
import type { NextPage } from "next";
import { motion, useInView } from "framer-motion";

const Contact: NextPage = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div id="Contact" className="bg-[#111111] flex flex-col h-[650px]">
      <motion.div
        initial={{ opacity: 0, y: "-10%" }}
        whileInView={{ opacity: 1, y: "0%" }}
        viewport={{ once: true }}
        className="flex justify-center ml-[9%] mt-14 w-60 font-[transducer-black] bg-[#f7e688] rounded-2xl py-1 px-10 text-2xl"
      >
        <p className="text-black">Contact us</p>
      </motion.div>

      <div className="max-[1100px]:flex justify-center">
        <div className="flex justify-evenly mt-10 max-[1100px]:flex-col max-[1100px]:w-3/4 overflow-x-hidden">
          <motion.div
            initial={{ opacity: 0, x: "-10%" }}
            whileInView={{ opacity: 1, x: "0%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="flex flex-col w-1/4 max-[1100px]:w-full"
          >
            <div>
              <p className="mb-2 font-[transducer-medium] text-lg">Name</p>
              <input
                className="mb-4 w-full bg-transparent border-2 border-[#FEF6C7] text-white rounded"
                type="text"
              />
            </div>
            <div>
              <p className="mb-2 font-[transducer-medium] text-lg">E-mail</p>
              <input
                className="mb-4 w-full bg-transparent border-2 border-[#FEF6C7] text-white rounded"
                type="text"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: "10%" }}
            whileInView={{ opacity: 1, x: "0%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="flex flex-col w-1/4 max-[1100px]:w-full"
          >
            <div>
              <p className="mb-2 font-[transducer-medium] text-lg">Subject</p>
              <input
                className="mb-4 w-full bg-transparent border-2 border-[#FEF6C7] text-white rounded"
                type="text"
              />
            </div>
            <div>
              <p className="mb-2 font-[transducer-medium] text-lg">
                Discord Username
              </p>
              <input
                className="mb-4 w-full bg-transparent border-2 border-[#FEF6C7] text-white rounded"
                type="text"
              />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="flex justify-center overflow-x-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex flex-col w-2/3 max-[1100px]:w-5/6"
        >
          <p className="mb-2 font-[transducer-medium] text-lg">Message</p>
          <textarea className="resize-none mb-4 w-full h-40 bg-transparent border-2 border-[#FEF6C7] text-white rounded" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: "10%" }}
        whileInView={{ opacity: 1, y: "0%" }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
        className="flex justify-end"
      >
        <div className="flex justify-center mr-[17%] mt-10 w-60 font-[transducer-black] bg-[#f7e688] text-white rounded-2xl py-1 px-10 text-2xl cursor-pointer hover:scale-110 ease-in-out duration-300 max-[1100px]:mr-[8%]">
          <p className="text-black">Submit</p>
        </div>
      </motion.div>

    {/*  <footer className="mt-20 flex flex-col">
        <div className="bg-[#111111] flex justify-center">
          <div className=" w-[90%] border-t-2 border-[#444138]"></div>
        </div>

         <motion.div
          initial={{ opacity: 0, x: "-10%" }}
          whileInView={{ opacity: 1, x: "0%" }}
          viewport={{ once: true }}
          style={{
            transform: isInView ? "none" : "translateX(-200px)",
            opacity: isInView ? 1 : 0,
          }}
          transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
          className="flex ml-[8%]"
        >
        <div className="flex justify-between w-96 mt-5 max-[800px]:w-72">
            <img
              className="w-11 cursor-pointer hover:scale-110 ease-in-out duration-300 max-[800px]:w-9"
              src="/agency/discord-2-512.png"
              alt=""
            />
            <img
              className="w-11 cursor-pointer hover:scale-110 ease-in-out duration-300 max-[800px]:w-9"
              src="/agency/facebook-3-512.png"
              alt=""
            />
            <img
              className="w-11 cursor-pointer hover:scale-110 ease-in-out duration-300 max-[800px]:w-9"
              src="/agency/twitter-512.png"
              alt=""
            />
            <img
              className="w-11 cursor-pointer hover:scale-110 ease-in-out duration-300 max-[800px]:w-9"
              src="/agency/instagram-6-512.png"
              alt=""
            />
            <img
              className="w-11 cursor-pointer hover:scale-110 ease-in-out duration-300 max-[800px]:w-9"
              src="/agency/new-post-512.png"
              alt=""
            />
          </div> 
        </motion.div>
      </footer>*/} 
    </div>
  );
};
export default Contact;
