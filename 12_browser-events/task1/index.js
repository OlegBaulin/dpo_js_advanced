(() => {
  document.addEventListener("DOMContentLoaded", () => {
    let button = document.querySelector(".js-button");
    let menu = document.querySelector(".js-menu");
    let wrapper = document.querySelector(".wrapper");

    function openMenu() {
      button.classList.toggle("show");

      let attrOfButton = button.attributes;

      if (attrOfButton["aria-expanded"].value === "true") {
        attrOfButton["aria-expanded"].value = "false";
      } else {
        attrOfButton["aria-expanded"].value = "true";
      }

      menu.classList.toggle("show");
      menu.classList.toggle("active");
    }

    function closeMenu() {
      menu.classList.remove("show");
      menu.classList.remove("active");
    }

    wrapper.addEventListener("click", (event) => {
      if (event.target.tagName === "SECTION") {
        closeMenu();
      }
    });

    button.addEventListener("click", (event) => {
      if (event.target.tagName === "BUTTON") {
        openMenu();
      }
    });
  });
})();
