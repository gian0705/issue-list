import axios from "axios";

export default axios.create({
  baseURL: `/api`, // http://localhost:3000/
});
