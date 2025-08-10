console.log("Welcome to your site, Milos!");

// 🎨 Background color changer
document.getElementById("colorButton").addEventListener("click", () => {
  const colors = ["#f0f0f0", "#ffe4e1", "#d1e7dd", "#fef3c7", "#e0f7fa"];
  document.body.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
});

// 🌙 Dark mode toggle
document.getElementById("darkModeButton").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// 🖼️ Lightbox functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');
const leftArrow = document.querySelector('.nav-arrow.left');
const rightArrow = document.querySelector('.nav-arrow.right');

let currentGroup = [];
let currentIndex = 0;

function showLightbox(group, index) {
  currentGroup = group;
  currentIndex = index;
  
  lightboxImg.classList.remove('show'); // Start hidden
  setTimeout(() => {
  lightboxImg.src = currentGroup[currentIndex].src;
  lightboxImg.onload = () => {
    lightboxImg.classList.add('show'); // Fade in after load
  };
}, 100); // Slight delay to trigger transition

  lightbox.classList.remove('hidden');

  // Show/hide arrows based on group size
  if (currentGroup.length > 1) {
    leftArrow.style.display = 'block';
    rightArrow.style.display = 'block';
  } else {
    leftArrow.style.display = 'none';
    rightArrow.style.display = 'none';
  }
}

// Standalone images
const standaloneImages = document.querySelectorAll('.image-row .clickable-image');
standaloneImages.forEach((img, index) => {
  img.addEventListener('click', () => showLightbox([img], 0));
});

// Gallery images
const galleryImages = document.querySelectorAll('.gallery .clickable-image');
galleryImages.forEach((img, index) => {
  img.addEventListener('click', () => showLightbox(Array.from(galleryImages), index));
});

// Navigation
leftArrow.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + currentGroup.length) % currentGroup.length;
  lightboxImg.classList.remove('show'); // Start hidden
  setTimeout(() => {
  lightboxImg.src = currentGroup[currentIndex].src;
  lightboxImg.onload = () => {
    lightboxImg.classList.add('show'); // Fade in after load
  };
}, 100); // Slight delay to trigger transition
});

rightArrow.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % currentGroup.length;
  lightboxImg.classList.remove('show'); // Start hidden
  setTimeout(() => {
  lightboxImg.src = currentGroup[currentIndex].src;
  lightboxImg.onload = () => {
    lightboxImg.classList.add('show'); // Fade in after load
  };
}, 100); // Slight delay to trigger transition
});

closeBtn.addEventListener('click', () => {
  lightbox.classList.add('hidden');
});

document.addEventListener('keydown', (e) => {
  if (lightbox.classList.contains('hidden')) return;
  if (e.key === 'Escape') lightbox.classList.add('hidden');
  if (e.key === 'ArrowLeft' && currentGroup.length > 1) leftArrow.click();
  if (e.key === 'ArrowRight' && currentGroup.length > 1) rightArrow.click();
});