let currentIndex = 0;

function moveSlide(direction) {
  const items = document.querySelectorAll(".carousel-item");
  const totalItems = items.length;
  items[currentIndex].classList.remove("active");
  currentIndex = (currentIndex + direction + totalItems) % totalItems;
  items[currentIndex].classList.add("active");
}

fetch("../data/data.json")
  .then((response) => response.json())
  .then((data) => {
    loadPropertyData(data.property);
    loadCarouselImages(data.carouselImages);
  })
  .catch((error) => console.error("Error loading data:", error));

function loadPropertyData(property) {
  document.getElementById("property-address").textContent = property.address;
  document.getElementById("property-description").textContent =
    property.description;
  document.getElementById(
    "property-price"
  ).textContent = `Price: $${property.price}`;
  document.getElementById("property-beds-baths-sqft").innerHTML = `
                <img class="icon" src="../images/icons/bed_24dp_000_FILL0_wght400_GRAD0_opsz24.png" alt=""/> ${property.beds} •
                <img class="icon" src="../images/icons/bathtub_24dp_000_FILL0_wght400_GRAD0_opsz24.png" alt=""/> ${property.baths} •
                <img class="icon" src="../images/icons/timeline_24dp_000_FILL0_wght400_GRAD0_opsz24.png" alt=""/> ${property.sqft} sqft
            `;
  document.getElementById(
    "highlight-parking"
  ).textContent = `Parking: ${property.parking}`;
  document.getElementById(
    "highlight-outdoor"
  ).textContent = `Outdoor: ${property.outdoor}`;
  document.getElementById("highlight-ac").textContent = `A/C: ${property.ac}`;
  document.getElementById(
    "highlight-hoa"
  ).textContent = `HOA: $${property.hoa}`;
  document.getElementById(
    "highlight-listing-date"
  ).textContent = `Listing Date: ${property.listingDate}`;
  document.getElementById(
    "highlight-price-per-sqft"
  ).textContent = `Price per Sq Ft: $${property.pricePerSqFt}`;
  document.getElementById(
    "basement"
  ).textContent = `Basement: ${property.basement}`;
  document.getElementById("rooms").textContent = `Rooms: ${property.rooms}`;
  document.getElementById(
    "types-of-rooms"
  ).textContent = `Room Types: ${property.typesOfRooms}`;

  const taxAssessmentBody = document.getElementById("tax-assessment-data");
  property.taxData.forEach((data) => {
    const row = document.createElement("tr");
    row.innerHTML = `
                    <td>${data.year}</td>
                    <td>${data.tax}</td>
                    <td>${data.assessment}</td>
                `;
    taxAssessmentBody.appendChild(row);
  });
}

function loadCarouselImages(data) {
  const propertyDataCarousel = document.querySelector(
    "#property-data-carousel .carousel-inner"
  );
  data.propertyDataImages.forEach((image) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "carousel-item";
    const imgElement = document.createElement("img");
    imgElement.src = image.img;
    itemDiv.appendChild(imgElement);
    propertyDataCarousel.appendChild(itemDiv);
  });
}

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

document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".carousel-item");
  items[currentIndex].classList.add("active");
});
