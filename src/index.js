import "./styles.css";

const div = document.createElement("div");
const bg = document.createElement("div");

document.querySelector("#app").appendChild(div).classList.add("sun");
document.querySelector("#app").appendChild(bg).classList.add("bg");

const sun = document.querySelector(".sun");
const body = document.querySelector("body");

sun.addEventListener("click", function () {
  body.classList.toggle("dark");
});
console.log(body);
