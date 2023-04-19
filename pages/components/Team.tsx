import React from "react";
import type { NextPage } from "next";
import { motion } from "framer-motion";

const Testimonial: NextPage = () => {
  return (
    <div
      id="Team"
      className="bg-[#111111] flex flex-col h-[850px] max-[1250px]:h-[900px] max-[880px]:h-[1900px] max-[430px]:h-[2000px]"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex justify-center"
      >
        <p className="font-[transducer-black] text-4xl mt-20 mb-16">
          Meet the Team
        </p>
      </motion.div>

      <div className="max-[880px]:flex max-[880px]:justify-center">
        <div className="flex justify-evenly max-[880px]:flex-col max-[880px]:justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="flex flex-col justify-center items-center w-96 max-[880px]:mb-20"
          >
            <div className="border-2 border-[#FEF6C7] rounded-lg">
              <img className="w-60 p-2" src="/agency/Testi1.png" alt="" />
            </div>
            <div className="flex justify-evenly items-center mt-4 mb-4  w-4/5">
              <a
                href="https://twitter.com/rubchisnkiyy"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="w-9 cursor-pointer hover:scale-110 ease-in-out duration-300"
                  src="/agency/twitter-512.png"
                  alt=""
                />
              </a>
              <p className="font-[transducer-black] text-lg text-center">
                Rubchinskiy <br />
                <span className="italic">Founder Caspers Labs</span>
              </p>
            </div>
            <p className="font-[transducer-hairline] text-center max-[1250px]:w-3/4 max-[1100px]:text-sm max-[880px]:w-full max-[430px]:w-[70%]">
              The founder of the Telemart computer equipment store network,
              since 2018 in the crypto, since 2021 has worked with more than 55
              NFT projects helping them with marketing. In his team, appreciates
              hard-working and reliable people who are ready to go through all
              the difficulties on the way to success and recognition, those
              principles adopted in working with clients.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col justify-center items-center mb-6 w-96 max-[880px]:mb-20"
          >
            <div className="border-2 border-[#FEF6C7] rounded-lg">
              <img className="w-60 p-2" src="/agency/jbas.png" alt="" />
            </div>
            <div className="flex justify-evenly items-center mt-4 mb-4 w-4/5">
                <img
                  className="w-9 cursor-pointer hover:scale-110 ease-in-out duration-300"
                  src="/agency/twitter-512.png"
                  alt=""
                />
              <p className="font-[transducer-black] text-center text-lg">
                Gustavoo <br />
                <span className="italic">Co-Founder Caspers Labs</span>
              </p>
            </div>
            <p className="font-[transducer-hairline] text-center max-[1250px]:w-3/4 max-[1100px]:text-sm max-[880px]:w-full max-[430px]:w-[70%]">
              Has been working in the IT field since 2016, later switched to
              WEB3 full time. Participated in the creation of such projects as
              Lords Mobile and Castle Clash, he successfully uses his knowledge
              and skills in working with clients and the team within our agency.
              &quot;Only .001% of projects will still be around in 10 years, we here
              for long term run&quot;
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
            className="flex flex-col justify-center items-center mb-6 w-96"
          >
            <div className="border-2 border-[#FEF6C7] rounded-lg">
              <img className="w-60 p-2" src="/agency/testi3.png" alt="" />
            </div>
            <div className="flex justify-evenly items-center mt-4 mb-4 w-4/5">
                <img
                  className="w-9 cursor-pointer hover:scale-110 ease-in-out duration-300"
                  src="/agency/twitter-512.png"
                  alt=""
                />
              <p className="font-[transducer-black] text-center text-lg">
                0xMoonlit <br />
                <span className="italic"> Marketing strategists</span>
              </p>
            </div>
            <p className="font-[transducer-hairline] text-center max-[1250px]:w-3/4 max-[1100px]:text-sm max-[880px]:w-full max-[430px]:w-[70%]">
              Building the right strategy before starting work is one of the
              most important components of the success of a marketing campaign,
              we at Caspers Labs entrust this work to one of the most
              experienced member of our team. 0xMoonlit worked on the creation
              of such projects as Toshies, BIRDYBITES, ALPACADABRAZ and others.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Testimonial;
