const langBtn = document.querySelector(".header-lang");
const otherLanguage = document.querySelector(".lang-other");

langBtn.addEventListener("click", function () {
  if (otherLanguage.classList.contains("open")) {
    otherLanguage.classList.remove("open");
  } else {
    otherLanguage.classList.add("open");
  }
});

// document.onclick = function (e) {
//   if (e.target != langBtn && e.target != otherLanguage) {
//     otherLanguage.classList.remove("open");
//   }
// };
