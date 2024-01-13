import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import "./MovieDetail.css";

interface Movie {
  id: number;
  title: string;
  rating: number;
  genre_id: number;
  director_id: number;
  image_uri: string;
  movie_description: string;
}

interface MovieWithPageProps {
  movie: Movie | null; // Define the movie prop
}

class MovieWithPage extends React.Component<MovieWithPageProps> {

  render() {
    const { movie } = this.props;

    // Check if movieId is undefined or empty and handle it
    if (!movie) {
      return <div>Movie ID is missing or invalid.</div>;
    }
    
    return (
      <div className='detailContainer'>
        <div className='movieInfo'>
          <h1>{movie.title}</h1>
          <img src={movie.image_uri}/>
          <p>{movie.movie_description}</p>
        </div>
      </div>
    );
  }
}


function MovieWithPageWrapper() {
  const { id } = useParams();
  const movieId = Number(id);

  const [movieData, setMovieData] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<Movie>(`http://localhost:8080/movies/single_movie?id=${movieId}`);
        setMovieData(response.data);
      } catch (error) {
        console.error("Error fetching movie data: ", error);
      }
    };
    
    fetchData();
  }, [movieId]);

  if (movieData === null) {
    // You can return a loading indicator here if you'd like
    return <div>Loading...</div>;
  }

  return <MovieWithPage movie={movieData} />;
}

export default MovieWithPageWrapper;