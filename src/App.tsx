import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./components/Movies";
//import Blog from "./components/Blog";
import NewBlog from "./components/NewBlog/NewBlog";
import MovieWithPage from './components/MovieDetail/MovieDetail';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/blog" element={<NewBlog />} />
          <Route path="/" element={<Movies />} />
          <Route path="/movies/:id" element={<MovieWithPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
