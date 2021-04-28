import axios from "axios";

const apiKey = process.env.REACT_APP_GOOGLE_API_KEY;
const basePath = process.env.REACT_APP_GOOGLE_BASE_URL;
export const geLatLong = (Addr) => {
  axios.get(`${basePath}?address=${Addr}&key=${apiKey}`).then((response) => {
    return response.data;
  });
};
