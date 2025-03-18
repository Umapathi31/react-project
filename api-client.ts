import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "6a12edb56e894790ba1c4fd1744c0d44",
  },
});
