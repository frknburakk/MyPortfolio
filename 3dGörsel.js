document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  let current = 0;
  let isScrollBlocked = false;  // Başlangıçta scroll açık
  let slideTimeout;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }

  function blockScroll() {
    document.body.style.overflowY = "hidden";
    isScrollBlocked = true;
  }

  function unblockScroll() {
    document.body.style.overflowY = "auto";
    isScrollBlocked = false;
  }

  function changeSlide(direction) {
    clearTimeout(slideTimeout);
    slideTimeout = setTimeout(() => {
      if (direction === "next" && current < slides.length - 1) {
        current++;
        showSlide(current);
      } else if (direction === "prev" && current > 0) {
        current--;
        showSlide(current);
      }
      updateScrollStatus();
    }, 300); // 300ms, hızlı geçiş
  }

  function updateScrollStatus() {
    if (current >= slides.length - 1) {
      // Son slaytta scroll açık kalsın
      unblockScroll();
    } else {
      // Son slayt dışındayken scroll engellenebilir
      // Ama biz scroll engellemesini mouseover ile kontrol edeceğiz
      // Burada bir şey yapma
    }
  }

  showSlide(current);
  updateScrollStatus();

  // Scroll kontrolü sadece slide'ların üstündeyken aktif olacak
  slides.forEach(slide => {
    slide.addEventListener("mouseenter", () => {
      blockScroll();
    });
    slide.addEventListener("mouseleave", () => {
      unblockScroll();
    });
  });

  window.addEventListener("wheel", (e) => {
    if (isScrollBlocked) {
      e.preventDefault();
      if (e.deltaY > 0) {
        changeSlide("next");
      } else if (e.deltaY < 0) {
        changeSlide("prev");
      }
    }
  }, { passive: false });
});




// Büyütülebilir görselleri seç
const zoomables = document.querySelectorAll('.final-image');

// Popup ve öğeleri
const popup = document.getElementById('image-popup');
const popupImg = document.getElementById('popup-img');
const closeBtn = document.querySelector('.close-btn');

// Her görsel tıklanınca büyük göster
zoomables.forEach(img => {
  img.addEventListener('click', () => {
    popup.style.display = 'flex';
    popupImg.src = img.src;
  });
});

// Kapat butonuna basınca popup'ı kapat
closeBtn.addEventListener('click', () => {
  popup.style.display = 'none';
});
