// Küçük animasyonlar veya sahne giriş efektleri için JS

document.addEventListener("DOMContentLoaded", () => {
  const scenes = document.querySelectorAll(".scene-block");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active-scene");
      }
    });
  }, {
    threshold: 0.2
  });

  scenes.forEach(scene => observer.observe(scene));
});



// Mobil menü toggle
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("navLinks");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
});



// Görseli büyüt
const zoomables = document.querySelectorAll('.zoomable');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.close');

zoomables.forEach(img => {
  img.addEventListener('click', () => {
    lightbox.style.display = 'block';
    lightboxImg.src = img.src;
  });
});

closeBtn.addEventListener('click', () => {
  lightbox.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = 'none';
  }
});
