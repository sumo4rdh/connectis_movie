import { POSTER_URL } from "../config/api";

export default function(bg) {
  return `<div class="movie-card_bg"
               style="background-image: url(${POSTER_URL + bg})">
          </div> `;
}
