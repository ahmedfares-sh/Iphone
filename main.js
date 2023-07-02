let iphoneList = document.querySelectorAll("section.images > div > img");
let colors = ["#000", "#247ec8", "#1e1e1e", "#c79b53", "#c82525"];
if (localStorage.getItem("lastest-index") !== null) {
  console.log("yse");
  document.getElementById(
    "ourIphone"
  ).innerHTML = `<img src="images/${localStorage.getItem(
    "lastest-index"
  )}.png" alt="" />
`;
}
iphoneList.forEach((e, index) => {
  e.addEventListener("click", function () {
    lastestIphone = index;
    localStorage.setItem("lastest-index", lastestIphone);
    document.getElementById(
      "ourIphone"
    ).innerHTML = `<img src="images/${localStorage.getItem(
      "lastest-index"
    )}.png" alt="" />
`;
    document.body.style.backgroundColor = colors[index];
  });
});
