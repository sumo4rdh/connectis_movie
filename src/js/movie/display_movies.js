import card from "./movie-card";

export default function(movieArray) {
  const mainDiv = document.getElementById("main-content");
  movieArray.forEach((item, i) => {
    console.log(item);
    let { title, poster_path } = item;
    var div = document.createElement("div");
    div.className = "movie-card";
    div.innerHTML = card(poster_path);
    mainDiv.appendChild(div);
  });
}
