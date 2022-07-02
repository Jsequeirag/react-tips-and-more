import { React, useEffect } from "react";
import "./canvas.css";
import stars from "./stars";
export default function Canvas() {
  useEffect(() => {
    stars();
  });

  return <canvas id="stars"> </canvas>;
}
