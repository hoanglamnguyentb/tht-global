document.addEventListener("DOMContentLoaded", function () {
  var article = document.querySelector(
    ".item-page, .article-content, .entry-content",
  );
  if (!article) return;
  const convertAttr = (el, fromAttr, toAttr) => {
    const val = el.getAttribute(fromAttr);
    if (val !== null) {
      el.setAttribute(toAttr, val);
      el.removeAttribute(fromAttr);
    }
  };
  article
    .querySelectorAll("[data-bs-toggle], [data-bs-target], [data-bs-dismiss]")
    .forEach((el) => {
      convertAttr(el, "data-bs-toggle", "data-toggle");
      convertAttr(el, "data-bs-target", "data-target");
      convertAttr(el, "data-bs-dismiss", "data-dismiss");
    });
});
