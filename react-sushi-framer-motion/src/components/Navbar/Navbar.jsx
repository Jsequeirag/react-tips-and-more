import { motion } from "framer-motion";
import React from "react";
import "./navbar.css";
export default function Navbar() {
  const fadeInDown = {
    initial: {
      y: -60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        delay: 0.7,
        ease: "easeInOut",
      },
    },
  };
  return (
    <>
      <motion.div
        className="navbar"
        variants={fadeInDown}
        initial="initial"
        animate="animate"
      >
        <div className="logo">
          <div className="logo-title">
            <h2>すし</h2>
          </div>
        </div>
        <div className="navbar-menu">
          <div className="navbar-menu-items">
            <p>
              <a classnName="item" href="#home">
                HOME
              </a>
            </p>
          </div>
          <div className="navbar-menu-items">
            <p>
              <a classnName="item" href="#home">
                ABOUT US
              </a>
            </p>
          </div>
        </div>
      </motion.div>
    </>
  );
}
