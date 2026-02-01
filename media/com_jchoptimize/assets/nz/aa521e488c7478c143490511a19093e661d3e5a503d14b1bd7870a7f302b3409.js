(function ($) {
  jQuery(document).ready(function ($) {
    $(document).on("show.bs.modal", ".modal", function () {
      $(this).appendTo("body");
    });
    const body = document.body;
    let lastScroll = 0;
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll <= 0) {
        body.classList.remove("scroll-up");
        return;
      }
      if (
        currentScroll > lastScroll &&
        !body.classList.contains("scroll-down")
      ) {
        body.classList.remove("scroll-up");
        body.classList.add("scroll-down");
      } else if (
        currentScroll < lastScroll &&
        body.classList.contains("scroll-down")
      ) {
        body.classList.remove("scroll-down");
        body.classList.add("scroll-up");
      }
      lastScroll = currentScroll;
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.querySelectorAll(".mobileCall");
    var lang = document.documentElement.lang;
    buttons.forEach(function (button) {
      if (window.innerWidth < 768) {
        button.removeAttribute("data-bs-toggle");
        button.removeAttribute("data-bs-target");
        if (lang == "vi-vn") {
          button.setAttribute("href", "tel:+84962723500");
        } else if (lang == "en-gb") {
          button.setAttribute("href", "tel:+84962723500");
        }
      }
      if (window.innerWidth > 768) {
        button.setAttribute("href", "tel:+84962723500");
      }
    });
  });
})(jQuery);
