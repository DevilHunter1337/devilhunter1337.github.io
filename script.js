function showTab(tabId) {
  document.querySelectorAll(".tab-content").forEach(tab => {
    tab.classList.remove("active");
  });

  document.querySelectorAll(".tab-btn").forEach(btn => {
    btn.classList.remove("active");
  });

  document.getElementById(tabId).classList.add("active");

  event.target.classList.add("active");
}

/* Lightbox */
function openLightbox(src) {
  document.getElementById("lightbox").style.display = "flex";
  document.getElementById("lightbox-img").src = src;
}

function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
