import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./components/Movies";
import Blog from "./components/Blog";
import MovieWithPage from './components/MovieDetail/MovieDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/blog" element={<Blog />} />
          <Route path="/" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieWithPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
