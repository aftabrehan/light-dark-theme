let themeToggleBtn = document.getElementById("theme-toggle-btn");
let sunMoonContainer = document.querySelector(".sun-moon-container");

themeToggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  let currentRotation = parseInt(
    getComputedStyle(sunMoonContainer).getPropertyValue("--rotation")
  );
  sunMoonContainer.style.setProperty("--rotation", currentRotation + 180);
});
