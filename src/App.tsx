import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          
          {/* Plantilla principal y sus path */}
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/Projects" element={<Projects />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
