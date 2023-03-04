(() => {
  function deleteDashesAndSpaces(str) {
    const reg2 = /^\s|^-+|-+$|\s$/g;
    while (reg2.test(str)) {
      str = str.replace(reg2, "");
    }
    return str.replace(/\s+/g, " ").replace(/-+/g, "-");
  }

  function getTextValues(inputs) {
    const textValues = [];

    for (const input of inputs) {
      textValues.push(input.value);
    }

    return textValues;
  }

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".js-form");
    const inputs = document.querySelectorAll(".js-input");
    const btn = document.querySelector(".js-btn");
    const reg1 = /[^-а-яА-ЯёЁ\s]/g;

    for (const input of inputs) {
      input.addEventListener("input", () => {
        input.value = input.value.replace(reg1, "");
      });
      input.addEventListener("blur", () => {
        let tmp = "";
        if (input.value.length > 0) {
          tmp = deleteDashesAndSpaces(input.value);
          input.value = tmp[0].toUpperCase() + tmp.slice(1).toLowerCase();
        }
      });
    }

    btn.addEventListener("click", () => {
      const textValues = getTextValues(inputs);
      form.insertAdjacentHTML(
        "afterend",
        `<p class="m-3">${textValues[0]} ${textValues[1]} ${textValues[2]}</p>`
      );
    });
  });
})();
