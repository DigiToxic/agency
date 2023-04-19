import React, { useState } from "react";
import type { NextPage } from "next";
import { motion } from "framer-motion";

const Testimonial: NextPage = () => {
  return (
    <div
      id="Testimonial"
      className="bg-[#111111] flex flex-col h-[875px] max-[1250px]:h-[915px] max-[880px]:h-[1900px] max-[430px]:h-[2100px]"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex justify-center"
      >
        <p className="font-[transducer-black] text-4xl mt-20 mb-16">
          Testimonial
        </p>
      </motion.div>

      <div className="max-[880px]:flex max-[880px]:justify-center">
        <div className="flex justify-evenly max-[880px]:flex-col max-[880px]:justify-center">
          <motion.div
            initial={{ opacity: 0, x: "-10%" }}
            whileInView={{ opacity: 1, x: "0%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="flex flex-col justify-center items-center w-96 max-[880px]:mb-20 -mt-6"
          >
            <div className="border-2 border-[#FEF6C7] rounded-lg">
              <img className="w-60 p-2" src="/project/Meteoria.png" alt="" />
            </div>
            <div className="flex justify-evenly items-center mt-4 mb-4  w-4/5">
              <p className="font-[transducer-black] text-xl text-center">
                XSensei <br />
                <span className="text-lg italic"> Founder of MeteoriaNFT </span>
              </p>
            </div>
            <p className="font-[transducer-hairline] text-center max-[1250px]:w-3/4 max-[1100px]:text-sm max-[880px]:w-full max-[430px]:w-[70%]">
              We worked with Caspers Labs for last 3 weeks before mint to get as
              much hype as possible around the project and get a new audience
              involved in it. They advised us on new directions in the marketing
              of NFT projects and we started working, in a short period of time
              we significantly improved the audience engagement stats and as a
              result successfully launched the genesis collection
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col justify-center items-center w-96 max-[880px]:mb-20"
          >
            <div className="border-2 border-[#FEF6C7] rounded-lg">
              <img className="w-60 p-2" src="/project/earpitz.png" alt="" />
            </div>
            <div className="flex justify-evenly items-center mt-4 mb-4 w-4/5">
              <p className="font-[transducer-black] text-center text-xl">
                Elemen7o and reyser.eth <br />
                <span className="text-lg italic"> Earpitz team members </span>
              </p>
            </div>
            <p className="font-[transducer-hairline] text-center max-[1250px]:w-3/4 max-[1100px]:text-sm max-[880px]:w-full  max-[430px]:w-[70%]">
              We worked with Caspers Labs for 2 months and set them the task of
              conducting a number of successful collaborations with top projects
              and ensuring the creation of a competent content plan to promote
              the project on Twitter. We express our gratitude to the agency for
              the work done, we recommend Caspers Labs to everyone who wants to
              get a team of professional marketers working with enthusiasm for
              the benefit of the project.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: "10%" }}
            whileInView={{ opacity: 1, x: "0%" }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="flex flex-col justify-center items-center w-96"
          >
            <div className="border-2 border-[#FEF6C7] rounded-lg">
              <img className="w-60 p-2" src="/project/Cultists.webp" alt="" />
            </div>
            <div className="flex justify-evenly items-center mt-4 mb-4 w-4/5">
              <p className="font-[transducer-black] text-center text-xl">
                Taxalations <br />
                <span className="text-lg italic"> Founder of Cultists</span>
              </p>
            </div>
            <p className="font-[transducer-hairline] text-center max-[1250px]:w-3/4 max-[1100px]:text-sm max-[880px]:w-full  max-[430px]:w-[70%]">
              When we turned to Caspers Labs, we had only art work and a twitter
              account ready, in less than a month we built a competent content
              and marketing plan, conducted more than 200 collabs with various
              projects and created an interested community around us, which,
              after a successful sold out, moved to discord. We recommend
              Caspers Labs for all those who want to build a successful project
              even without a huge budget.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
