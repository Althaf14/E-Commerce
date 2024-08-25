// Add this to your main.js
window.addEventListener('DOMContentLoaded', (event) => {
  const cards = document.querySelectorAll('.card');
  
  cards.forEach((card, index) => {
    card.style.setProperty('--delay', `${index * 0.2}s`); // Adjust delay per card
  });
});
