export default function(movieArray) {
  const mainDiv = document.getElementById("main-content");
  movieArray.forEach((item, i) => {
    console.log(item);
    let { title } = item;
    var div = document.createElement("div");
    div.innerHTML = title;
    mainDiv.appendChild(div);
  });
}
