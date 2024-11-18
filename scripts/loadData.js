document.addEventListener("DOMContentLoaded", () => {
  const jsonFilePath = "../data/data.json";

  fetch(jsonFilePath)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Failed to load JSON: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => populateData(data.property))
    .catch((error) => console.error("Error loading JSON:", error));

  function populateData(property) {
    document.getElementById("property-address").textContent = property.address;
    document.getElementById("property-description").textContent =
      property.description;
    document.getElementById(
      "developer-name"
    ).textContent = `Owner: ${property.developer}`;
    document.getElementById(
      "property-price"
    ).textContent = `Price: $${property.price.toLocaleString()}`;

    document.getElementById("property-beds-baths-sqft").innerHTML = `
      <img class="icon" src="../images/icons/bed_24dp_000_FILL0_wght400_GRAD0_opsz24.png" alt="Beds Icon" />
      ${property.beds} • 
      <img class="icon" src="../images/icons/bathtub_24dp_000_FILL0_wght400_GRAD0_opsz24.png" alt="Baths Icon" />
      ${property.baths} • 
      <img class="icon" src="../images/icons/timeline_24dp_000_FILL0_wght400_GRAD0_opsz24.png" alt="Sqft Icon" />
      ${property.sqft} sqft
    `;

    document.getElementById(
      "basement"
    ).textContent = `Basement: ${property.homeDetails.basement}`;
    document.getElementById(
      "rooms"
    ).textContent = `Rooms: ${property.homeDetails.rooms.join(", ")}`;
    document.getElementById(
      "beds-baths"
    ).textContent = `Beds & Baths: ${property.homeDetails.bedsBaths.full} Full, ${property.homeDetails.bedsBaths.half} Half`;

    const taxTableBody = document.getElementById("tax-assessment-data");
    property.taxes.forEach((taxEntry) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${taxEntry.year}</td>
        <td>$${taxEntry.tax.toLocaleString()}</td>
        <td>$${taxEntry.assessment.toLocaleString()}</td>
      `;
      taxTableBody.appendChild(row);
    });

    const similarHomesList = document.getElementById("similar-homes-list");
    similarHomesList.innerHTML = property.similar
      .map(
        (home) => `
        <div class="similar-home">
          <img src="${home.img}" alt="${
          home.address
        }" class="gallery-thumbnail" />
          <p>${home.address}</p>
          <p>$${home.price.toLocaleString()}</p>
          <p>${home.beds} Beds | ${home.baths} Baths | ${home.sqft} Sq Ft</p>
        </div>
      `
      )
      .join("");

    const gallery = document.querySelector(".gallery");
    property.gallery.forEach((image) => {
      const img = document.createElement("img");
      img.src = image.src;
      img.alt = image.alt;
      img.className = "gallery-thumbnail";
      gallery.appendChild(img);
    });
  }
});
