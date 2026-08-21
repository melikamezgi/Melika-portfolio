document.addEventListener("DOMContentLoaded", () => {
  const languageBtn = document.getElementById("language-btn");

  let isEnglish = false;

  if (languageBtn) {
    languageBtn.addEventListener("click", () => {
      isEnglish = !isEnglish;

      const elements = document.querySelectorAll("[data-fa]");

      elements.forEach((element) => {
        const faText = element.getAttribute("data-fa");

        const enText = element.getAttribute("data-en");

        if (isEnglish && enText) {
          element.innerHTML = enText;
        } else if (!isEnglish && faText) {
          element.innerHTML = faText;
        }
      });

      if (isEnglish) {
        document.documentElement.lang = "en";

        document.documentElement.dir = "ltr";

        languageBtn.innerHTML = "FA";
      } else {
        document.documentElement.lang = "fa";

        document.documentElement.dir = "rtl";

        languageBtn.innerHTML = "EN";
      }
    });
  }

  // Scroll animation

  const reveals = document.querySelectorAll(".reveal");

  function reveal() {
    reveals.forEach((item) => {
      const windowHeight = window.innerHeight;

      const top = item.getBoundingClientRect().top;

      if (top < windowHeight - 100) {
        item.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", reveal);

  reveal();
});
