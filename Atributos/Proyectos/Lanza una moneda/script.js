let Cara = 0;
let Cruz = 0;
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");
flipBtn.addEventListener("click", () => {
  let i = Math.floor(Math.random() * 2);
  coin.style.animation = "none";
  if (i) {
    setTimeout(function () {
      coin.style.animation = "spin-Cara 3s forwards";
    }, 100);
    Cara++;
  } else {
    setTimeout(function () {
      coin.style.animation = "spin-Cruz 3s forwards";
    }, 100);
    Cruz++; }
  setTimeout(updateStats, 3000);
  disableButton();});
function updateStats() {
  document.querySelector("#Cara-count").textContent = `Cara: ${Cara}`;
  document.querySelector("#Cruz-count").textContent = `Cruz: ${Cruz}`;}
function disableButton() {
  flipBtn.disabled = true;
  setTimeout(function () {
    flipBtn.disabled = false;
  }, 3000);}
resetBtn.addEventListener("click", () => {
  coin.style.animation = "none";
  Cara = 0;
  Cruz = 0;
  updateStats();});