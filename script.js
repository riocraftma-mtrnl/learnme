/* ================================================= */
/* SCROLL REVEAL ANIMATION */
/* ================================================= */

/*
fungsi:
- bikin card muncul pas discroll
- website terasa lebih hidup
*/

const reveals = document.querySelectorAll(
  ".card, .hero-text, .hero-image, .solution-box, .final-cta"
);

function revealOnScroll(){

  const windowHeight = window.innerHeight;

  reveals.forEach((item) => {

    const elementTop =
      item.getBoundingClientRect().top;

    if(elementTop < windowHeight - 100){

      item.classList.add("active");

    }

  });

}

/* jalankan saat scroll */
window.addEventListener(
  "scroll",
  revealOnScroll
);

/* jalankan pas website dibuka */
revealOnScroll();

/* ========================================= */
/* CARD GLOW EFFECT */
/* ========================================= */

const cards =
  document.querySelectorAll(".card");

cards.forEach((card) => {

  card.addEventListener("mousemove", (e) => {

    const rect =
      card.getBoundingClientRect();

    const x =
      e.clientX - rect.left;

    const y =
      e.clientY - rect.top;

    card.style.setProperty(
      "--x",
      `${x}px`
    );

    card.style.setProperty(
      "--y",
      `${y}px`
    );

  });

});

/* ================================================= */
/* NAVBAR SHADOW */
/* ================================================= */

/*
fungsi:
- navbar jadi lebih keren pas discroll
*/

const navbar =
  document.querySelector(".navbar");

window.addEventListener("scroll", () => {

  if(window.scrollY > 50){

    navbar.classList.add("navbar-active");

  }else{

    navbar.classList.remove("navbar-active");

  }

});