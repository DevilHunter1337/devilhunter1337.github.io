/* =========================
   Tab Switching Function
========================= */

function showTab(event, tabId) {
  // Hide all tab contents
  document.querySelectorAll(".tab-content").forEach(tab => {
    tab.classList.remove("active");
  });

  // Remove active state from all buttons
  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.remove("active");
  });

  // Show the selected tab
  document.getElementById(tabId).classList.add("active");

  // Highlight the clicked button
  event.target.classList.add("active");
}

/* =========================
   Lightbox Functions (Images Only)
========================= */

function openLightbox(src) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  lightbox.style.display = "flex";
  lightboxImg.src = src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
