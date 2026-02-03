function showTab(tab) {
  document.querySelectorAll('.gallery').forEach(g => g.classList.remove('active'));
  document.querySelectorAll('.tabs button').forEach(b => b.classList.remove('active'));

  document.getElementById(tab).classList.add('active');
  event.target.classList.add('active');
}

function openLightbox(src) {
  document.getElementById('lightbox').style.display = 'flex';
  document.getElementById('lightbox-img').src = src;
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function loadYT(el, id) {
  el.outerHTML = `
    <div class="video-wrap">
      <iframe src="https://www.youtube-nocookie.com/embed/${id}?autoplay=1"
        allowfullscreen></iframe>
    </div>`;
}

const mediaItems = [...document.querySelectorAll('#videos .media')];
const lightbox = document.getElementById('videoLightbox');
const inner = lightbox.querySelector('.lightbox-inner');

let currentIndex = 0;
let startX = 0;

mediaItems.forEach((item, i) => {
  item.addEventListener('click', () => openLightbox(i));
});

function openLightbox(index) {
  currentIndex = index;
  inner.innerHTML = '';
  mediaItems.forEach(m => inner.appendChild(buildMedia(m)));
  lightbox.classList.add('active');
  updatePosition();
}

function closeLightbox() {
  lightbox.classList.remove('active');
  inner.innerHTML = '';
}

function buildMedia(el) {
  const type = el.dataset.type;
  const src = el.dataset.src;
  const wrap = document.createElement('div');
  wrap.className = 'media';

  if (type === 'youtube') {
    wrap.innerHTML = `
      <iframe
        src="https://www.youtube-nocookie.com/embed/${src}?autoplay=1"
        allowfullscreen></iframe>`;
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

/* Swipe detection */
lightbox.addEventListener('touchstart', e => startX = e.touches[0].clientX);
lightbox.addEventListener('touchend', e => {
  const dx = e.changedTouches[0].clientX - startX;
  if (dx > 60 && currentIndex > 0) currentIndex--;
  if (dx < -60 && currentIndex < mediaItems.length - 1) currentIndex++;
  updatePosition();
});

/* Tap outside to close */
lightbox.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});

function openImageLightbox(src) {
  const box = document.getElementById('imageLightbox');
  const img = document.getElementById('imageLightboxImg');
  img.src = src;
  box.style.display = 'flex';
}

function closeImageLightbox() {
  document.getElementById('imageLightbox').style.display = 'none';
}
