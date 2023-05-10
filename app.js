const longMountain = document.querySelector(".home-mountains img:nth-child(1)");
const title = document.querySelector('h1');

gsap.to(longMountain, {
    y : 100,
    scrollTrigger: {
        trigger:  'home-mountains',
        scrub: true,
    },
});
  
gsap.to(title, {
    y : 500,
    scrollTrigger: {
        trigger:  'home-mountains',
        scrub: true,
    },
});

