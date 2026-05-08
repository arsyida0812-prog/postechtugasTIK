// MOBILE MENU
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// FADE IN
const fadeElements = document.querySelectorAll(".fade-in");

const showOnScroll = () => {

  fadeElements.forEach((element) => {

    const elementTop = element.getBoundingClientRect().top;

    if(elementTop < window.innerHeight - 100){
      element.classList.add("show");
    }

  });

};

window.addEventListener("scroll", showOnScroll);

showOnScroll();

// CHECKOUT
function checkout(){

  let nomor = "6285856638523";

  let pesan = "Halo kak, saya ingin membeli desain digital POSTECH AJA";

  let url = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;

  window.open(url, "_blank");

  document.getElementById("pesan").innerHTML =
  "Yeay! Terima kasih sudah checkout desain digitalnya 🛒💫 <br> Semoga cocok dan bikin makin kece yaa 😆💕";

}
