document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("info-modal");
  var moreInfoBtn = document.getElementById("more-info");
  var closeBtn = document.getElementsByClassName("close-btn")[0];

  moreInfoBtn.onclick = function () {
    modal.style.display = "block";
  };

  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
});

document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("calc-modal");
  var moreInfoBtn = document.getElementById("calc-btn");
  var closeBtn = document.getElementsByClassName("closes-btn")[0];

  moreInfoBtn.onclick = function () {
    modal.style.display = "block";
  };

  closeBtn.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };
});
