import WebApp from "@twa-dev/sdk";
import gsap from "gsap";

gsap.defaults({ duration: 0.6, ease: "power3.out" });

// GAME

export const animGameOnClick = () => {
  WebApp.HapticFeedback.impactOccurred("light");
  const imageAnim = gsap.timeline({
    defaults: { duration: 0.1, ease: "bounce.inOut" },
  });
  imageAnim
    .to("#main-image", { rotate: 4 })
    .to("#main-image", { rotate: -4 })
    .to("#main-image", { rotate: 0 });
};

export const animGameButtonStart = () => {
  gsap.to("#main-image-container", { x: "7px", y: "-5px", duration: 0.1 });
};

export const animGameButtonEnd = () => {
  gsap.to("#main-image-container", {
    x: 0,
    y: 0,
    duration: 0.1,
  });
};

export const animGameTitle = () => {
  return gsap.fromTo(
    "#coin-info-1",
    { x: -100, opacity: 0 },
    { x: 0, opacity: 1 },
  );
};
export const animGameEnergy = () => {
  return gsap.fromTo(
    "#energy-menu",
    { x: 100, opacity: 0 },
    { x: 0, opacity: 1 },
  );
};
export const animGameMain = () => {
  return gsap.fromTo(
    "#main-image",
    {
      opacity: 0,
      rotate: 180,
    },
    {
      opacity: 1,
      scale: 1,
      rotate: 0,
      delay: 0.1,
    },
  );
};

export const animGameTopButtons = () => {
  return gsap.fromTo(
    "#game-top-name",
    { x: -100, opacity: 0 },
    { x: 0, opacity: 1 },
  );
};

export const animaGameBuyEnergy = () => {
  return gsap.fromTo(
    "#buy-energy",
    { x: 100, opacity: 0 },
    { x: 0, opacity: 1 },
  );
};

// PROFILE

export const animProfileButtonsLeft = () => {
  return gsap.fromTo(
    "#buttons-menu-left-button",
    { x: -100, opacity: 0 },
    { x: 0, opacity: 1 },
  );
};

export const animProfileButtonsRight = () => {
  return gsap.fromTo(
    "#buttons-menu-right-button",
    { x: 100, opacity: 0 },
    { x: 0, opacity: 1 },
  );
};

export const animProfileTransactions = () => {
  const timeline = gsap.timeline();
  return timeline
    .fromTo("#first-tra", { y: 50 }, { y: 0 })
    .fromTo("#second-tra", { opacity: 0, y: 50 }, { opacity: 1, y: 0 }, "-=.5")
    .fromTo("#third-tra", { opacity: 0, y: 50 }, { opacity: 1, y: 0 }, "-=.5");
};

export const animProfileTitle = () => {
  return gsap.fromTo(
    "#profile-title",
    { x: -100, opacity: 0 },
    { x: 0, opacity: 1 },
  );
};
export const animProfileCoin = () => {
  return gsap.fromTo(
    "#profile-coin",
    { x: -100, opacity: 0 },
    { x: 0, opacity: 1 },
  );
};
export const animProfileInvite = () => {
  return gsap.fromTo(
    "#invite-menu",
    { x: 100, opacity: 0 },
    { x: 0, opacity: 1 },
  );
};

// FAQ

export const animFaqItems = () => {
  return gsap.fromTo("#faq-items", { y: 50, opacity: 0 }, { y: 0, opacity: 1 });
};

export const animFaqTitle = () => {
  return gsap.fromTo(
    "#faq-title",
    { y: -30, opacity: 0 },
    { y: 0, opacity: 1 },
  );
};
