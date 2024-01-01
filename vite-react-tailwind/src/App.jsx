import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Bloques from "./components/bloques";
import Button from "./components/button";
import Layout from "./components/layout";
import Inicio from "./pages/Inicio";
import Cursos from "./pages/Cursos";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
function App() {
  return (
    <>
      <div className="bg-primary min-h-screen">
        <Navbar />
        <Layout>
          <Routes>
            <Route path="/" element={<Inicio />}></Route>
            <Route path="/registro" element={<Registro />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
          </Routes>
        </Layout>
      </div>
    </>
  );
}

export default App;
