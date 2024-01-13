import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./components/Movies";
import Home from "./components/Home";
import MovieWithPage from './components/MovieDetail/MovieDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieWithPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
