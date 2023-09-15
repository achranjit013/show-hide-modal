"use strict";

const btnShowModal = document.querySelectorAll(".show-modal");
const btnCloseModal = document.querySelector(".close-modal");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const showModal = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnShowModal.forEach((item) => {
  item.addEventListener("click", showModal);
});

btnCloseModal.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) closeModal();
});

// document.querySelectorAll(".show-modal").forEach((el) => {
//   el.addEventListener("click", function () {
//     document.querySelectorAll(".hidden").forEach((el) => {
//       el.style.display = "block";
//     });
//   });
// });

// document.querySelector(".close-modal").addEventListener("click", function () {
//   document.querySelectorAll(".hidden").forEach((el) => {
//     el.style.display = "none";
//   });
// });

// document.querySelector(".overlay").addEventListener("click", function () {
//   document.querySelectorAll(".hidden").forEach((el) => {
//     el.style.display = "none";
//   });
// });
