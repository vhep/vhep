// // Glide code

const carousels = document.querySelectorAll(".glide");

Object.values(carousels).map((carousel) => {
  const slider = new Glide(carousel, {
    type: "carousel",
    perView: 4,
    animationDuration: 1000,
    gap: 10,
    breakpoints: {
      1400: {
        perView: 3,
      },
      1000: {
        perView: 2,
      },
      650: {
        perView: 1,
      },
    },
  });
  slider.mount();
});
