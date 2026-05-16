// Select the menu button and navigation menu
const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector("nav");

// Select the gallery and modal elements
const gallery = document.querySelector(".gallery");
const imageViewer = document.querySelector(".image-viewer");
const modalImage = imageViewer.querySelector("img");
const closeButton = document.querySelector(".close-viewer");

// Toggle the mobile menu when the Menu button is clicked
menuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  nav.classList.toggle("hide");
}

// Open the image modal when an image is clicked
gallery.addEventListener("click", openViewer);

function openViewer(event) {
  // Make sure the user clicked an image, not empty space in the gallery
  if (event.target.tagName !== "IMG") {
    return;
  }

  const clickedImage = event.target;

  modalImage.src = clickedImage.src;
  modalImage.alt = clickedImage.alt;

  imageViewer.showModal();
}

// Close the modal when the X button is clicked
closeButton.addEventListener("click", closeViewer);

function closeViewer() {
  imageViewer.close();
}

// Close the modal when clicking outside the image
imageViewer.addEventListener("click", function(event) {
  if (event.target === imageViewer) {
    imageViewer.close();
  }
});