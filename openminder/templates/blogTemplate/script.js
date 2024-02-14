document.addEventListener("DOMContentLoaded", function () {
  var allImages = document.querySelectorAll("img");

  allImages.forEach(function (image) {
    image.addEventListener("mouseover", function () {
      console.log("Mouseover event triggered");
      image.style.cursor = "pointer";
    });
    image.addEventListener("click", function () {
      image.classList.toggle("image-hover");
    });

    image.addEventListener("mouseout", function () {
      console.log("Mouseout event triggered");
      image.style.cursor = "auto";
    });
  });
});
