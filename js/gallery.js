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
