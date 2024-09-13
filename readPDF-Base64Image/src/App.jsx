import { useState } from "react";
import SinglePages from "./components/SinglePages";
import "./components/style.css";
import AllPages from "./components/AllPages";
import ImgBase64 from "./components/ImgBase64";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ImgBase64 />
      <SinglePages />
      <AllPages />
    </>
  );
}

export default App;
