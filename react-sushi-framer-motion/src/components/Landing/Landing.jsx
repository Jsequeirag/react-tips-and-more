import React from "react";
import Navbar from "../Navbar/Navbar";
import Sushi from "../Sushi/Sushi";
import imgT from "../../assets/svg/imgT.svg";
import imgR from "../../assets/svg/imgR.svg";
import imgB from "../../assets/svg/imgB.svg";
import imgL from "../../assets/svg/imgL.svg";
import { motion } from "framer-motion";

import "./landing.css";
export default function Landing() {
  const fadeInUp = {
    initial: {
      x: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <Navbar />
      <div className="landingpage section-padding" id="home">
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="sushi"
        >
          <Sushi classname={"left"} imgurl={imgL} />
          <Sushi classname={"top"} imgurl={imgT} />
          <Sushi classname={"bottom"} imgurl={imgB} />
          <Sushi classname={"right"} imgurl={imgR} />
        </motion.div>
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          className="maintext-name"
        >
          <div className="uptext">
            <h5>
              Best Japonese <span>Sushi</span>
            </h5>
          </div>
          <div className="middletext">
            <h2>Sushi section</h2>
          </div>
          <div className="lowtext">
            <h6>You favorite sushi store online</h6>
          </div>
        </motion.div>
      </div>
    </>
  );
}
