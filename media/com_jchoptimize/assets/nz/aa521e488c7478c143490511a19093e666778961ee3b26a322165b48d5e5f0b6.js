var jversion = "5";
var rootURL = "/";
var menuID = 686;
var jadir = jQuery("html").attr("dir");
var pinchDuration = 0;
(function ($) {
  var desc = $.parseJSON(
    '{"311":{"ptype":"image","ptype_image":"images\/flag\/location-canada.png#joomlaImage:\/\/local-images\/flag\/location-canada.png?width=256&height=256","icon":"map-marker","iconcolor":"#ffffff","offsetx":"19.91","offsety":"22.95","iconsize":"40","iconanchorx":"-50","iconanchory":"-50","jasetimage":"","content_type":"default","content_img":"","content_url":"","title":"Company incorporation Canada","link":"","cutnumber":"50","vwidth":"400","vheight":"400","classpoint":"bg-transparent","bgcolor":"light","placement":"vertical","popwidth":"40%","popheight":"auto","details":"<div>\\nCanada\u2019s high brand value, friendly business environment, and simple company establishment requirements have attracted many foreign investors to open companies here.\\n    <\/div>\\n    <br \/>\\n    <div>\\n      <a href=\\"\/en\/company-incorporation\/canada\\" class=\\"glac-map-readmore\\" style=\\"font-weight: bold\\"\\n        >Read more\\n      <\/a>\\n    <\/div>","imgid":"311"},"3111111111111":{"ptype":"image","ptype_image":"images\/flag\/location-australia.png#joomlaImage:\/\/local-images\/flag\/location-australia.png?width=256&height=256","icon":"map-marker","iconcolor":"#ffffff","offsetx":"87.69","offsety":"77.63","iconsize":"40","iconanchorx":"-36","iconanchory":"-70","jasetimage":"","content_type":"default","content_img":"","content_url":"","title":"Company incorporation in Australia","link":"","cutnumber":"50","vwidth":"400","vheight":"400","classpoint":"bg-transparent","bgcolor":"light","placement":"vertical","popwidth":"40%","popheight":"auto","details":"<div>\\n Australia\u2019s stable and sustainable economy, development promotion policies for foreign investors, high technology level, and high consumption power are also attractive factors for enterprises to establish foreign companies here.\\n<\/div>\\n<br \/>\\n<div>\\n  <a href=\\"\/en\/company-incorporation\/australia\\" class=\\"glac-map-readmore\\" style=\\"font-weight: bold\\"\\n    >Read more\\n  <\/a>\\n<\/div>","imgid":"3111111111111"},"3111":{"ptype":"image","ptype_image":"images\/flag\/location-belize.png#joomlaImage:\/\/local-images\/flag\/location-belize.png?width=256&height=256","icon":"map-marker","iconcolor":"#ffffff","offsetx":"23.95","offsety":"52.56","iconsize":"40","iconanchorx":"-50","iconanchory":"-50","jasetimage":"","content_type":"default","content_img":"","content_url":"","title":"Company incorporation in Belize","link":"","cutnumber":"50","vwidth":"400","vheight":"400","classpoint":"bg-transparent","bgcolor":"light","placement":"vertical","popwidth":"40%","popheight":"auto","details":"<div>\\nBelize\u2019s stable politics, high security of corporate information, and preferential tax costs depending on each industry are always attractive factors for foreign businesses to invest here.\\n<\/div>\\n<br \/>\\n<div>\\n  <a href=\\"\/en\/company-incorporation\/belize\\" class=\\"glac-map-readmore\\" style=\\"font-weight: bold\\"\\n    >Read more\\n  <\/a>\\n<\/div>","imgid":"3111"},"31111":{"ptype":"image","ptype_image":"images\/flag\/location-british-virgin-islands.png#joomlaImage:\/\/local-images\/flag\/location-british-virgin-islands.png?width=256&height=256","icon":"map-marker","iconcolor":"#ffffff","offsetx":"28.58","offsety":"50.23","iconsize":"40","iconanchorx":"-50","iconanchory":"-50","jasetimage":"","content_type":"default","content_img":"","content_url":"","title":"Company incorporation in British Virgin Islands","link":"","cutnumber":"50","vwidth":"400","vheight":"400","classpoint":"bg-transparent","bgcolor":"light","placement":"vertical","popwidth":"40%","popheight":"auto","details":"<div>\\n  The British Virgin Islands (BVI) is an offshore company with attractive incentives such as tax incentives, information security, and simple accounting and tax procedures. These incentives have made BVI a remarkable choice for foreign investors.\\n<\/div>\\n<br \/>\\n<div>\\n  <a href=\\"\/en\/company-incorporation\/bvi\\" class=\\"glac-map-readmore\\" style=\\"font-weight: bold\\"\\n    >Read more\\n  <\/a>\\n<\/div>","imgid":"31111"},"31111111":{"ptype":"image","ptype_image":"images\/flag\/location-hong-kong.png#joomlaImage:\/\/local-images\/flag\/location-hong-kong.png?width=256&height=256","icon":"map-marker","iconcolor":"#ffffff","offsetx":"82.11","offsety":"46.12","iconsize":"40","iconanchorx":"-48","iconanchory":"-65","jasetimage":"","content_type":"default","content_img":"","content_url":"","title":"Company incorporation in Hong Kong","link":"","cutnumber":"50","vwidth":"400","vheight":"400","classpoint":"bg-transparent","bgcolor":"light","placement":"vertical","popwidth":"40%","popheight":"auto","details":"<div>\\nHong Kong\u2019s tax incentives and attractive benefits suitable for technology businesses and advertising have made it a great choice for foreign companies to set up here.\\n<\/div>\\n<br \/>\\n<div>\\n  <a href=\\"\/en\/company-incorporation\/hong-kong\\" class=\\"glac-map-readmore\\" style=\\"font-weight: bold\\"\\n    >Read more\\n  <\/a>\\n<\/div>","imgid":"31111111"},"3111111111":{"ptype":"image","ptype_image":"images\/flag\/location-malaysia.png#joomlaImage:\/\/local-images\/flag\/location-malaysia.png?width=256&height=256","icon":"map-marker","iconcolor":"#ffffff","offsetx":"77.97","offsety":"57.32","iconsize":"40","iconanchorx":"-50","iconanchory":"-50","jasetimage":"","content_type":"default","content_img":"","content_url":"","title":"Company incorporation in Malaysia","link":"","cutnumber":"50","vwidth":"400","vheight":"400","classpoint":"bg-transparent","bgcolor":"light","placement":"vertical","popwidth":"40%","popheight":"auto","details":"<div>\\nMalaysia\u2019s tax incentives, economy among the top in Southeast Asia, and simple and fast company opening process have attracted many foreign enterprises to open companies here.\\n<\/div>\\n<br \/>\\n<div>\\n  <a href=\\"\/en\/company-incorporation\/malaysia\\" class=\\"glac-map-readmore\\" style=\\"font-weight: bold\\"\\n    >Read more\\n  <\/a>\\n<\/div>","imgid":"3111111111"},"311111111111":{"ptype":"image","ptype_image":"images\/flag\/location-marshall-island.png#joomlaImage:\/\/local-images\/flag\/location-marshall-island.png?width=256&height=256","icon":"map-marker","iconcolor":"#ffffff","offsetx":"93.99","offsety":"64.59","iconsize":"40","iconanchorx":"-50","iconanchory":"-50","jasetimage":"","content_type":"default","content_img":"","content_url":"","title":"Company incorporation in Marshall Island","link":"","cutnumber":"50","vwidth":"400","vheight":"400","classpoint":"bg-transparent","bgcolor":"light","placement":"vertical","popwidth":"40%","popheight":"auto","details":"<div>\\n  The Marshall Islands offer a strategic hub for global business expansion\\n\\nEnjoy advantages such as no exchange controls on foreign transactions,favoral tax schemes, privacy policy and more\\n<\/div>\\n<br \/>\\n<div>\\n  <a href=\\"#\\" class=\\"glac-map-readmore\\" style=\\"font-weight: bold\\"\\n    >Read more\\n  <\/a>\\n<\/div>","imgid":"311111111111"},"3111111":{"ptype":"image","ptype_image":"images\/flag\/location-seychelles.png#joomlaImage:\/\/local-images\/flag\/location-seychelles.png?width=256&height=256","icon":"map-marker","iconcolor":"#ffffff","offsetx":"64.61","offsety":"62.50","iconsize":"40","iconanchorx":"-50","iconanchory":"-50","jasetimage":"","content_type":"default","content_img":"","content_url":"","title":"Company incorporation in Seychelles","link":"","cutnumber":"50","vwidth":"400","vheight":"400","classpoint":"bg-transparent","bgcolor":"light","placement":"vertical","popwidth":"40%","popheight":"auto","details":"<div>\\nSeychelles is an offshore country with high security, low tax rates, no financial statements required, and a simple and fast company opening process. Attractive incentives focus on setting up foreign companies here.\\n<\/div>\\n<br \/>\\n<div>\\n  <a href=\\"\/en\/company-incorporation\/seychelles\\" class=\\"glac-map-readmore\\" style=\\"font-weight: bold\\"\\n    >Read more\\n  <\/a>\\n<\/div>","imgid":"3111111"},"31111111111":{"ptype":"image","ptype_image":"images\/flag\/location-singapore.png#joomlaImage:\/\/local-images\/flag\/location-singapore.png?width=256&height=256","icon":"map-marker","iconcolor":"#ffffff","offsetx":"79.82","offsety":"54.95","iconsize":"40","iconanchorx":"-37","iconanchory":"20","jasetimage":"","content_type":"default","content_img":"","content_url":"","title":"Company incorporation in Singapore","link":"","cutnumber":"50","vwidth":"400","vheight":"400","classpoint":"bg-transparent","bgcolor":"light","placement":"vertical","popwidth":"40%","popheight":"auto","details":"<div>\\nSingapore is a leading economy in Southeast Asia and a world financial center. The island nation\u2019s diversified economic and financial development has made it the choice of many foreign businesses.\\n<\/div>\\n<br \/>\\n<div>\\n  <a href=\\"\/en\/company-incorporation\/singapore\\" class=\\"glac-map-readmore\\" style=\\"font-weight: bold\\"\\n    >Read more\\n  <\/a>\\n<\/div>","imgid":"31111111111"},"311111111":{"ptype":"image","ptype_image":"images\/flag\/location-thailand.png#joomlaImage:\/\/local-images\/flag\/location-thailand.png?width=256&height=256","icon":"map-marker","iconcolor":"#ffffff","offsetx":"76.63","offsety":"46.83","iconsize":"40","iconanchorx":"-50","iconanchory":"-50","jasetimage":"","content_type":"default","content_img":"","content_url":"","title":"Company incorporation in Thailand","link":"","cutnumber":"50","vwidth":"400","vheight":"400","classpoint":"bg-transparent","bgcolor":"light","placement":"vertical","popwidth":"40%","popheight":"auto","details":"<div>\\nThailand is a well-known developed country in tourism and export in Asia. It is suitable for agricultural, commodity, and tourism enterprises to open foreign companies here.\\n<\/div>\\n<br \/>\\n<div>\\n  <a href=\\"\/en\/company-incorporation\/thailand\\" class=\\"glac-map-readmore\\" style=\\"font-weight: bold\\"\\n    >Read more\\n  <\/a>\\n<\/div>","imgid":"311111111"},"31":{"ptype":"image","ptype_image":"images\/flag\/location-united-states.png#joomlaImage:\/\/local-images\/flag\/location-united-states.png?width=256&height=256","icon":"map-marker","iconcolor":"#ffffff","offsetx":"20.21","offsety":"37.64","iconsize":"40","iconanchorx":"-50","iconanchory":"-50","jasetimage":"","content_type":"default","content_img":"","content_url":"","title":"Company incorporation in the U.S.","link":"","cutnumber":"50","vwidth":"400","vheight":"400","classpoint":"bg-transparent","bgcolor":"light","placement":"vertical","popwidth":"40%","popheight":"auto","details":"<div>\\nThe U.S. is a major financial and economic center of the world. Many large corporations and companies establish foreign companies in the U.S. to expand international markets and enhance their brand position.\\n<\/div>\\n<br \/>\\n<div>\\n  <a href=\\"\/en\/company-incorporation\/the-us\\" class=\\"glac-map-readmore\\" style=\\"font-weight: bold\\"\\n    >Read more\\n  <\/a>\\n<\/div>","imgid":"31"},"311111":{"ptype":"image","ptype_image":"images\/flag\/location-united-kingdom.png#joomlaImage:\/\/local-images\/flag\/location-united-kingdom.png?width=256&height=256","icon":"map-marker","iconcolor":"#ffffff","offsetx":"48.61","offsety":"28.80","iconsize":"40","iconanchorx":"-50","iconanchory":"-50","jasetimage":"","content_type":"default","content_img":"","content_url":"","title":"Company incorporation in the UK","link":"","cutnumber":"50","vwidth":"400","vheight":"400","classpoint":"bg-transparent","bgcolor":"light","placement":"vertical","popwidth":"40%","popheight":"auto","details":"<div>\\n The UK has a dynamic and free-growing economy in the European region. In addition, preferential policies for foreign investors, preferential tax treaties, and high human resources have attracted many foreign investors to open companies here.\\n<\/div>\\n<br \/>\\n<div>\\n  <a href=\\"\/en\/company-incorporation\/the-uk\\" class=\\"glac-map-readmore\\" style=\\"font-weight: bold\\"\\n    >Read more\\n  <\/a>\\n<\/div>","imgid":"311111"}}',
  );
  var jaihp_settings = {
    hideDelay: 400,
    trigger: "hover",
    multiple: 0,
    anim: "pop",
  };
  $(window).on("load", function () {
    scaleIconFollowScreen("ja-hotspot-image-993", "ja-imagesmap993");
    addHammerJS("ja-imagesmap993", 5, 1);
    if ($("#ja-imagesmap993 #cd-dropdown").hasClass("chzn-done"))
      $("#ja-imagesmap993 #cd-dropdown").chosen("destroy");
    $("#ja-imagesmap993 #cd-dropdown").jadropdown({ gutter: 0, stack: false });
    $("#ja-imagesmap993 .cd-dropdown ul li").click(function () {
      target = $(this).attr("data-value");
      setTimeout(function () {
        WebuiPopovers.show("#ja-imagesmap993 #" + target + " .bg");
      }, 100);
    });
    $("#ja-imagesmap993 a.point").each(function () {
      var data = desc[$(this).attr("id").replace("ja-marker-", "")];
      var _e = $(this).find(".bg");
      if (
        "popup" == "window" &&
        is_mobile_device() &&
        data.content_url &&
        data.content_type == "website"
      ) {
        _e.click(function (event) {
          window.open($(this).parent().data("content_url"), "_blank");
          return false;
          event.preventDefault();
          return false;
        });
      } else OverAllData(_e, data, jaihp_settings);
      if (jaihp_settings.trigger == "hover" && !is_mobile_device()) {
        _e.click(function (event) {
          if ($(this).parent().data("link") && data.content_type == "default") {
            window.open($(this).parent().data("link"), "_blank");
            return;
          }
          if ($(this).parent().data("content_url"))
            window.open($(this).parent().data("content_url"), "_blank");
          event.preventDefault();
          return false;
        });
      }
      if (jaihp_settings.trigger == "sticky") {
        _e.off()
          .unbind()
          .click(function (event) {
            _e.webuiPopover("destroy");
            _e.off().unbind();
            jaihp_settings2 = jaihp_settings;
            jaihp_settings2.trigger = "hover";
            OverAllData(_e, data, jaihp_settings2);
            event.preventDefault();
            return false;
          });
      }
    });
    jQuery(window).on("resize", function (event) {
      scaleIconFollowScreen("ja-hotspot-image-993", "ja-imagesmap993");
    });
  });
})(jQuery);
var loadLegacy = "1";
if (loadLegacy == "1") {
  jQuery("head").append(
    '<link href="/media/t4pagebuilder/builder/css/legacy.css" rel="stylesheet" type="text/css">',
  );
}
jQuery(document).ready(function ($) {
  var pageid = "44";
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
