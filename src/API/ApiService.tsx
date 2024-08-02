import axios, { AxiosInstance, AxiosResponse } from "axios";

// Define types for your API response and request parameters
interface Movie {
    id: number;
    position: number;
    title: string;
    rating: number;
    genre_id: number;
    image_uri: string;
}

interface ApiResponse<T> {
  data: T;
  status: number;
}

interface ApiError {
  message: string;
  status: number;
}

class ApiService {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
    });

    // Bind methods to ensure access to 'this'
    this.getMoviesByGenre = this.getMoviesByGenre.bind(this);
    this.getMoviesByTitle = this.getMoviesByTitle.bind(this);
  }

  // API method to get movies by genre
  async getMoviesByGenre(genre_id: number, page_number: number): Promise<Movie[]> {
    try {
      const response = await this.axiosInstance.get<Movie[]>('/movies', {
        params: {
          genre_id,
          page_number,
        },
      });
      
      // Check response status and data
      if (response.status === 200 && response.data) {
        return response.data; // Return just the data part
      } else {
        throw new Error('Failed to fetch movies by genre');
      }
    } catch (error) {
      throw new Error('Failed to fetch movies by genre');
    }
  }

  // API method to get movies by title
  async getMoviesByTitle(title: string, page_number: number): Promise<Movie[]> {
    try {
      const response = await this.axiosInstance.get<Movie[]>('/movies/search', {
        params: {
          title,
          page_number
        },
      });
      
      // Check response status and data
      if (response.status === 200 && response.data) {
        return response.data; // Return just the data part
      } else {
        throw new Error('Failed to fetch movies by title');
      }
    } catch (error) {
      throw new Error('Failed to fetch movies by title');
    }
  }

  // You can add more methods for other API endpoints
}

export default ApiService;
