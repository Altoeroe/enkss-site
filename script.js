// Automatically load images from the "images" folder
// NOTE: GitHub Pages cannot list files dynamically
// So you need to manually add image names here or generate via backend
const products = [
  "motor1.png",
  "motor2.png",
  "motor3.png"
];


const container = document.getElementById("product-list");

products.forEach(img => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="images/${img}" alt="${img}">
    <h3>${img.split('.')[0]}</h3>
  `;

  card.addEventListener("click", () => {
    window.location.href = `product.html?product=${img}`;
  });

  container.appendChild(card);
});
