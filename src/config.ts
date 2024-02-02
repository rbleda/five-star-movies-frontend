let API_BASE_URL: string;

if (process.env.NODE_ENV === 'production') {
  API_BASE_URL = 'http://fivestarsmovies.com';
} else {
  // Use a development or staging API URL for other environments
  API_BASE_URL = 'http://localhost';
}

const config = {
  baseURL: API_BASE_URL,
};

export default config;