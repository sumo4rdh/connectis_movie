import axios from "axios";
import { API_URL, MOVIE_LIST } from "../config/api";

export default function() {
  console.log(API_URL);
  let movies;
  axios.get(API_URL).then(response => {
    MOVIE_LIST.push(...response.data.results);
  });
}
