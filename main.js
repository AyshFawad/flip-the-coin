document.addEventListener("DOMContentLoaded", function () {
    const flipButton = document.getElementById("flip");
    const coinImage = document.getElementById("coinImage");
    const coinPara = document.querySelector(".face");

    flipButton.addEventListener("click", function () {
      const isHeads = Math.random() < 0.5; // 50% chance
      coinImage.src = isHeads ? "./resources/heads.svg" : "./resources/tails.svg";
      coinImage.alt = isHeads ? "Heads" : "Tails";
      coinPara.textContent = isHeads ? "Heads"  :  "Tails";
    });
  });