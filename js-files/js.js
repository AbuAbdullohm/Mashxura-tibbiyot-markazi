const langBtn = document.querySelector(".header-lang");
const otherLanguage = document.querySelector(".lang-other");

langBtn.addEventListener("click", function () {
  if (otherLanguage.classList.contains("open")) {
    otherLanguage.classList.remove("open");
  } else {
    otherLanguage.classList.add("open");
  }
});

const helpBtn = document.getElementById("help-btn-main");

helpBtn.addEventListener("click", function () {
  if (helpBtn.classList.contains("open")) {
    helpBtn.classList.remove("open");
    document.querySelector(".help-btn-others").style.display = "none";
    document.querySelector(".help-btn-others").style.opacity = "0";
    console.log("first");
  } else {
    helpBtn.classList.add("open");
    document.querySelector(".help-btn-others").style.display = "flex";
    document.querySelector(".help-btn-others").style.opacity = "1";
    console.log("second");
  }
});

const consultAgeBtn1 = document.querySelector(".consult-btn-1");
const consultAgeBtn2 = document.querySelector(".consult-btn-2");

consultAgeBtn1.addEventListener("click", function () {
  if (!consultAgeBtn1.classList.contains("active")) {
    consultAgeBtn1.classList.add("active");
    consultAgeBtn2.classList.remove("active");
  }
});

consultAgeBtn2.addEventListener("click", function () {
  if (!consultAgeBtn2.classList.contains("active")) {
    consultAgeBtn2.classList.add("active");
    consultAgeBtn1.classList.remove("active");
  }
});

document.onclick = function (e) {
  if (
    e.target !== helpBtn &&
    e.target !== document.querySelector(".help-btn-others")
  ) {
    helpBtn.classList.remove("open");
    document.querySelector(".help-btn-others").style.display = "none";
    document.querySelector(".help-btn-others").style.opacity = "0";
  }
};

//sliders

const rightBtn = document.getElementById("right");
const leftBtn = document.getElementById("left");

rightBtn.addEventListener("click", function(){
  console.log("right-clicked")
})

leftBtn.addEventListener("click", function(){
  console.log("left-clicked")
})