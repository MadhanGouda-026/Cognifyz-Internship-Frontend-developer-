// List of colors for random selection
const colors = [
  "#ffb3b3", // Light Red
  "#b3d9ff", // Soft Blue
  "#c1f0c1", // Light Green
  "#ffe0b3", // Light Orange
  "#e0ccff", // Light Purple
  "#f2f2f2"  // Light Grey
];

// Selecting the button
const button = document.getElementById("colorBtn");

// Adding click event listener
button.addEventListener("click", () => {

  // Pick a random color from the array
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  // Apply the color to page background
  document.body.style.backgroundColor = randomColor;
});
