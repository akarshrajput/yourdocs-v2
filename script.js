// -----------------------------MAP------------------------------------

navigator.geolocation.getCurrentPosition(
  function (position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    // console.log(latitude, longitude);
    const coords = [latitude, longitude];
    const map = L.map("map").setView(coords, 13);
    const pos1 = document.querySelector(".latitude");
    const pos2 = document.querySelector(".longitude");
    pos1.textContent = `${latitude}`;
    pos2.textContent = `${longitude}`;
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    L.marker(coords).addTo(map).openPopup();
  },
  function () {
    alert(`Could not get your position`);
  }
);

// -----------------------------IP Address-----------------------------

document.addEventListener("DOMContentLoaded", () => {
  const ipAddressHero = document.querySelector(".ip-address");
  const ipAddressMap = document.querySelector(".ip-address-map");
  fetch("https://api.ipify.org?format=json")
    .then((response) => response.json())
    .then((data) => {
      const ipAddress = data.ip;
      let ip = ipAddress;
      ipAddressHero.textContent = `Your IP : ${ipAddress}`;
      ipAddressMap.textContent = `IP : ${ipAddress}`;
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  // -----------------------------Date-----------------------------
  const date = new Date().getFullYear();
  const currentDate = document.querySelector(".current-date");
  currentDate.textContent = date;
  // ----------------------------Cookies--------------------------
  // const cookies = document.querySelector(".cookies");
  // setTimeout(function () {
  //   cookies.style.display = "block";
  // }, 3000);
});

// ----------------------------Remove copy paste---------------------
// script.js

document.addEventListener("copy", function (e) {
  e.preventDefault();
  alert("Copying is not allowed.");
});

document.addEventListener("cut", function (e) {
  e.preventDefault();
  alert("Cutting is not allowed.");
});

document.addEventListener("paste", function (e) {
  e.preventDefault();
  alert("Pasting is not allowed.");
});

// -----------------------------Accordion-----------------------------

const accordionItems = document.querySelectorAll(".item");
accordionItems.forEach((item) => {
  const btnAccordion = item.querySelector(".accordion-cursor");
  btnAccordion.addEventListener("click", function () {
    item.classList.toggle("open");
  });
});

// ---------------------Offline/Online mode preferences---------------

const offlineText = document.querySelector(".offline-mode-container-text");
offlineText.textContent = "You are offline";
const offlineMode = document.querySelector(".offline-mode");
addEventListener("offline", function () {
  console.log("Offline");
  offlineMode.style.display = "block";
});
addEventListener("online", function () {
  console.log("Online");
  offlineMode.style.display = "none";
});
