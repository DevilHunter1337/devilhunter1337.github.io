function showTab(e, tab) {
  document.querySelectorAll(".gallery").forEach(g =>
    g.classList.remove("active")
  );

  document.querySelectorAll(".tabs button").forEach(b =>
    b.classList.remove("active")
  );

  document.getElementById(tab).classList.add("active");
  e.target.classList.add("active");
}

/* IMAGE LIGHTBOX */
function openImageLightbox(src) {
  const box = document.getElementById("imageLightbox");
  document.getElementById("imageLightboxImg").src = src;
  box.style.display = "flex";
}

function closeImageLightbox() {
  document.getElementById("imageLightbox").style.display = "none";
}

/* VIDEO LIGHTBOX */
document.addEventListener("DOMContentLoaded", () => {

  const mediaItems = [...document.querySelectorAll("#videos .media")];
  const lightbox = document.getElementById("videoLightbox");
  const inner = lightbox.querySelector(".lightbox-inner");

  let currentIndex = 0;
  let startX = 0;

  /* CLICK VIDEO THUMBNAILS */
  mediaItems.forEach((item, i) => {
    item.addEventListener("click", () => {
      openVideoLightbox(i);
    });
  });

  function openVideoLightbox(index) {
    currentIndex = index;
    inner.innerHTML = "";

    mediaItems.forEach(m => inner.appendChild(buildMedia(m)));

    lightbox.classList.add("active");
    updatePosition();
  }

  function closeVideoLightbox() {
    lightbox.classList.remove("active");
    inner.innerHTML = "";
  }

  function buildMedia(el) {
    const type = el.dataset.type;
    const src = el.dataset.src;

    const wrap = document.createElement("div");
    wrap.className = "media";

    if (type === "youtube") {
      wrap.innerHTML = `
        <iframe
          src="https://www.youtube-nocookie.com/embed/${src}?autoplay=1&playsinline=1&rel=0"
          allow="autoplay; fullscreen"
          allowfullscreen>
        </iframe>`;
    } else {
      wrap.innerHTML = `
        <video controls autoplay playsinline>
          <source src="${src}" type="video/mp4">
        </video>`;
    }

    return wrap;
  }

  function updatePosition() {
    inner.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  /* SWIPE SUPPORT */
  lightbox.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
  });

  lightbox.addEventListener("touchend", e => {
    const dx = e.changedTouches[0].clientX - startX;

    if (dx > 60 && currentIndex > 0) currentIndex--;
    if (dx < -60 && currentIndex < mediaItems.length - 1) currentIndex++;

    updatePosition();
  });

  /* TAP OUTSIDE CLOSE */
  lightbox.addEventListener("click", e => {
    if (e.target === lightbox) closeVideoLightbox();
  });

});
