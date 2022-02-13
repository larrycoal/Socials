const $ = (selector) => document.querySelector(selector);

$("#hamburger").addEventListener("click", () => {
  console.log("clicked");
  $("#mobile_menu").classList.toggle("navigation_menu-mobile");
});
