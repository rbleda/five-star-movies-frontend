import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./components/Movies";
import Home from "./components/Home";
import ContactPage from "./components/ContactPage/ContactPage";
import Tv from "./components/Tv";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tv" element={<Tv />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
