// Function to create and move circles
function createAndMoveCircles() {
  const decoration = document.querySelector(".decoration");

  setInterval(function () {
    const circle = document.createElement("div");
    circle.className = "circle";
    decoration.appendChild(circle);

    const size = Math.random() * 50 + 10; // Random size between 10 and 60 pixels
    const startX = Math.random() * window.innerWidth;
    const duration = Math.random() * 10 + 5; // Random duration between 5 and 15 seconds

    circle.style.width = `${size}px`;
    circle.style.height = `${size}px`;
    circle.style.left = `${startX}px`;
    circle.style.animation = `moveCircle ${duration}s linear infinite`;

    // Remove circles when they move out of the screen
    circle.addEventListener("animationiteration", () => {
      circle.remove();
    });
  }, 1000);
}

createAndMoveCircles();
