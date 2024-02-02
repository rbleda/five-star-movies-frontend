let API_BASE_URL: string;

if (process.env.NODE_ENV === 'production') {
  API_BASE_URL = 'http://fivestarsmovies.com/api';
} else {
  // Use a development or staging API URL for other environments
  API_BASE_URL = 'http://localhost:8080';
}

const config = {
  baseURL: API_BASE_URL,
};

export default config;