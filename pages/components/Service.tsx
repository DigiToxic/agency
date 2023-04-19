import React, { useState } from "react";
import type { NextPage } from "next";
import { motion } from "framer-motion";

const Service: NextPage = () => {
  return (
    <div
      id="Services"
      className="bg-[#111111] flex flex-col h-[820px] max-[1420px]:h-[1200px] max-[751px]:h-[2000px]"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex justify-center"
      >
        <p className="font-[transducer-black] text-4xl mt-20">
          Services Offered
        </p>
      </motion.div>

      <div className="flex justify-center">
        <div className="grid grid-cols-4 gap-10 mt-36 max-[1420px]:grid-cols-2 max-[751px]:grid-cols-1">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="flex flex-col items-center w-80"
          >
            <img
              className="w-14 mb-5 cursor-pointer hover:scale-110 ease-in-out duration-300"
              src="/agency/twitter-512.png"
              alt=""
            />
            <p className="font-[transducer-black] text-xl mb-10">
              Social Media Promotion
            </p>
            <p className="text-center font-[transducer-hairline] mb-[121px]">
              Get access to over 200 communities who are interested in your
              project and brand. Let the solvent audience know about your
              project and admire it
            </p>
            <div className="w-[90%] border-t-4 border-[#444138] mt-5"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="flex flex-col items-center w-80"
          >
            <img
              className="w-14 mb-5 cursor-pointer hover:scale-110 ease-in-out duration-300"
              src="/agency/partnership.png"
              alt=""
            />
            <p className="font-[transducer-black] text-xl mb-10">
              Collabs and Partnerships
            </p>
            <p className="text-center font-[transducer-hairline]">
              A good relationship is half the work, collaborations and
              partnerships are as important as making friends in real life, at
              Caspers Labs we provide our clients with the opportunity to
              collaborate with over 200 projects including tier 1 projects.
            </p>
            <div className="w-[90%] border-t-4 border-[#444138] mt-[70px]"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="flex flex-col items-center w-80"
          >
            <img
              className="w-14 mb-5 cursor-pointer hover:scale-110 ease-in-out duration-300"
              src="/agency/megaphone.png"
              alt=""
            />
            <p className="font-[transducer-black] text-xl mb-10">
              Influencer marketing
            </p>
            <p className="text-center font-[transducer-hairline] mb-6">
              NFT influencer marketing is one the most effective tool we&apos;ve
              used at Caspers Lbas to grow NFT communities and sell out the
              various NFT collections. NFT influencer marketing will help you
              supercharge community growth on Twitter and Discord.
            </p>
            <div className="w-[90%] border-t-4 border-[#444138] mt-5"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="flex flex-col items-center w-80"
          >
            <img
              className="w-14 mb-5 cursor-pointer hover:scale-110 ease-in-out duration-300"
              src="/agency/strategy.png"
              alt=""
            />
            <p className="font-[transducer-black] text-xl mb-10">
              Strategy building
            </p>
            <p className="text-center font-[transducer-hairline] mb-[72px]">
              Building the right marketing strategy to suit the current
              realities of the NFT market is not an easy task, entrust it to us
              and we will do this job better than our competitors our services
              will provide other info later today
            </p>
            <div className="w-[90%] border-t-4 border-[#444138] mt-5"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Service;
