(() => {
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("top");

    window.addEventListener(
      "scroll",
      () => {
        console.log(window.pageYOffset);
        if (window.pageYOffset > 100) {
          btn.classList.add("active");
        } else {
          btn.classList.remove("active");
        }
      },
      { passive: true }
    );
    btn.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
})();
