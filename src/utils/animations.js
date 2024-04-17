import gsap from "gsap";

export const animatePageIn = () => {
  const banner = document.getElementById("transition");

  if (banner) {
    const tl = gsap.timeline();

    tl.set(banner, {
      yPercent: 0,
    }).to(banner, {
      yPercent: -100,
      stagger: 0.2,
    });
  }
};

export const animatePageOut = (href, router) => {
  const banner = document.getElementById("transition");
  if (banner) {
    const tl = gsap.timeline();

    tl.set(banner, {
      yPercent: -100,
    }).to(banner, {
      yPercent: 0,
      stagger: 0.2,
      onComplete: () => {
        router.push(href);
      },
    });
  }
};
