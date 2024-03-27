// Selectors
const hamburgerIconContainer = document.querySelector(
  ".hamburger-icon-container"
);
const popupMenus = document.querySelector(".popup-menus");
const navContainer = document.querySelector("  #nav .nav-container");
const heroContainerPara = document.querySelector(
  "#hero .hero-container .para-container p"
);
const hamburgerIcon = document.querySelector("span.bars");
const xmarkIcon = document.querySelector("span.x-mark");

// Popup menus display logic on the Navbar

// On load by default remove the popup Menus
popupMenus.classList.remove("show");

hamburgerIconContainer.addEventListener("click", () => {
  popupMenus.classList.toggle("show");

  hamburgerIconContainer.classList.toggle("active");
});

document.addEventListener("scroll", () => {
  popupMenus.classList.remove("show", window.scrollY > 0);

  hamburgerIconContainer.classList.remove("active");
});
