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
  } else {
    helpBtn.classList.add("open");
    document.querySelector(".help-btn-others").style.display = "flex";
    document.querySelector(".help-btn-others").style.opacity = "1";
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

const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.opened");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("opened");
  overlay.classList.add("opened");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("opened");
  overlay.classList.remove("opened");
}

//Recall modal

const openRecallButtons = document.querySelectorAll("[data-modal-target2]");
const closeRecallButtons = document.querySelectorAll("[data-close-button2]");

openRecallButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget2);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".recall-modal.opened");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeRecallButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".recall-modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("opened");
  overlay.classList.add("opened");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("opened");
  overlay.classList.remove("opened");
}

function toggleActiveClass(event) {
  let items = document.getElementsByClassName("item-btn");
  for (let i = 0; i < items.length; i++) {
    items[i].classList.remove("active");
  }

  let clickedItem = event.target;
  clickedItem.classList.add("active");

  let content = document.getElementById("advantages-content");
  let itemContent = clickedItem.getAttribute("data-content");
  content.textContent = itemContent;
}
