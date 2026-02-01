var loadLegacy = "1";
if (loadLegacy == "1") {
  jQuery("head").append(
    '<link href="/media/t4pagebuilder/builder/css/legacy.css" rel="stylesheet" type="text/css">',
  );
}
jQuery(document).ready(function ($) {
  var pageid = "104";
  localStorage.setItem("pageid", pageid);
  $(".t4b-edit-btn").on("click", function (e) {
    e.preventDefault();
    localStorage.setItem("editpage", true);
    localStorage.setItem("T4EDIT_VISITED", true);
    localStorage.setItem("T4EDIT_PAGE", window.location.href);
    window.location.href =
      "/index.php?option=com_t4pagebuilder&view=page&layout=edit&id=" +
      pageid +
      "&inline=1";
  });
  window["t4b-animation"].init({ easing: "ease-out-back", duration: 1000 });
});
