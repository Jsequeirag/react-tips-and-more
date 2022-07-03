import React from "react";
import { motion } from "framer-motion";
import "./sushi.css";
export default function Sushi({ classname, imgurl }) {
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.2 }}
        drag={true}
        dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
        className="sushi-img"
      >
        <img className={classname} src={imgurl} />
      </motion.div>
    </>
  );
}
