import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {

  return (
    <>
      <BrowserRouter basename="/portafolio">
        <Routes>
          
          {/* Plantilla principal y sus path */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
