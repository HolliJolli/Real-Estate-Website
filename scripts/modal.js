function openModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "block";
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  modal.style.display = "none";
}

document.querySelectorAll(".close-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    closeModal("info-modal");
    closeModal("calc-modal");
  });
});

window.addEventListener("click", (event) => {
  if (event.target.classList.contains("modal")) {
    closeModal("info-modal");
    closeModal("calc-modal");
  }
});

document.getElementById("more-info").addEventListener("click", () => {
  openModal("info-modal");
});

document.getElementById("calc-btn").addEventListener("click", () => {
  openModal("calc-modal");
});
