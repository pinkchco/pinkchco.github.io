    // Confetti generator
    function createConfetti() {
      const confetti = document.createElement("div");
      confetti.classList.add("confetti");
      document.body.appendChild(confetti);

      // Random position and animation duration
      confetti.style.left = Math.random() * 100 + "vw";
      confetti.style.backgroundColor =
        "hsl(" + Math.random() * 360 + ", 100%, 50%)";
      confetti.style.animationDuration = Math.random() * 3 + 2 + "s";

      setTimeout(() => {
        confetti.remove();
      }, 5000);
    }

    // Generate multiple confetti every 300ms
    setInterval(createConfetti, 300);

    function showPopup() {
      console.log("Popup is being shown"); // Tambahkan log
      document.getElementById("popup").style.display = "block";
      document.getElementById("popup-overlay").style.display = "block";
  }  
    
    // Script untuk menutup pop-up
    function closePopup() {
      document.getElementById("popup").style.display = "none";
      document.getElementById("popup-overlay").style.display = "none";
    }

  // Fungsi untuk mengganti gambar saat layar lebih kecil dari 768px
function updateImageSrc() {
  var img = document.getElementById('responsiveImage');
  if (window.innerWidth <= 768) {
      img.src = 'img/wiv.svg'; // Gambar untuk layar kecil
  } else {
      img.src = 'img/wave.svg'; // Gambar default untuk layar besar
  }
}

// Panggil fungsi ketika halaman pertama kali dimuat
updateImageSrc();

// Panggil fungsi setiap kali ukuran layar berubah
window.addEventListener('resize', updateImageSrc);

    // Efek parallax saat scroll
    window.addEventListener('scroll', function() {
      const header = document.querySelector('.header');
      const overlay = document.querySelector('.overlay');
      
      const scrollPosition = window.scrollY;
  
      // Saat scroll mencapai titik tertentu, tambahkan animasi fade-in
      if (scrollPosition > 50) {
          overlay.style.opacity = '1';
          overlay.style.transform = 'translateY(0)';
      } else {
          overlay.style.opacity = '0';
          overlay.style.transform = 'translateY(-20px)';
      }
  });
  


// Deteksi saat elemen muncul di viewport
const slideElements = document.querySelectorAll('.slide-in');

window.addEventListener('scroll', checkSlide);

function checkSlide() {
    const triggerBottom = window.innerHeight / 5 * 4;  // posisi pemicu

    slideElements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            el.classList.add('visible');  // tambahkan class saat elemen terlihat
        } else {
            el.classList.remove('visible'); // hapus class jika elemen tidak terlihat
        }
    });
}
