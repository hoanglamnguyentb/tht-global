var jversion = "5";
var rootURL = "/";
var menuID = 682;
var jadir = jQuery("html").attr("dir");
var pinchDuration = 0;
(function ($) {
  var desc = $.parseJSON(
    '{"311111":{"ptype":"image","ptype_image":"images\/flag\/location-united-kingdom.png#joomlaImage:\/\/local-images\/flag\/location-united-kingdom.png?width=256&height=256","icon":"map-marker","iconcolor":"#ffffff","offsetx":"48.61","offsety":"28.80","iconsize":"40","iconanchorx":"-50","iconanchory":"-50","jasetimage":"","content_type":"default","content_img":"","content_url":"","title":"Th\u00e0nh l\u1eadp c\u00f4ng ty t\u1ea1i Anh","link":"","cutnumber":"50","vwidth":"400","vheight":"400","classpoint":"bg-transparent","bgcolor":"light","placement":"vertical","popwidth":"40%","popheight":"auto","details":"<div>\\n  N\u1ec1n kinh t\u1ebf n\u0103ng \u0111\u1ed9ng, t\u1ef1 do ph\u00e1t tri\u1ec3n khu v\u1ef1c ch\u00e2u \u00c2u. B\u00ean c\u1ea1nh \u0111\u00f3, ch\u00ednh s\u00e1ch \u01b0u \u0111\u00e3i d\u00e0nh cho nh\u00e0 \u0111\u1ea7u t\u01b0 n\u01b0\u1edbc ngo\u00e0i, c\u00e1c hi\u1ec7p \u01b0\u1edbc \u01b0u \u0111\u00e3i thu\u1ebf v\u00e0 \u0111\u1ed9i ng\u0169 nh\u00e2n l\u1ef1c cao \u0111\u00e3 thu h\u00fat nhi\u1ec1u nh\u00e0 \u0111\u1ea7u t\u01b0 n\u01b0\u1edbc ngo\u00e0i m\u1edf c\u00f4ng ty t\u1ea1i \u0111\u00e2y.\\n<\/div>\\n<br \/>\\n<div>\\n  <a href=\\"\/vi\/thanh-lap-cong-ty-tai-nuoc-ngoai\/thanh-lap-cong-ty-tai-anh-quoc\\" class=\\"glac-map-readmore\\" style=\\"font-weight: bold\\"\\n    >\u0110\u1ecdc ti\u1ebfp \\n  <\/a>\\n<\/div>","imgid":"311111"},"3111":{"ptype":"image","ptype_image":"images\/flag\/location-belize.png#joomlaImage:\/\/local-images\/flag\/location-belize.png?width=256&height=256","icon":"map-marker","iconcolor":"#ffffff","offsetx":"23.95","offsety":"52.56","iconsize":"40","iconanchorx":"-50","iconanchory":"-50","jasetimage":"","content_type":"default","content_img":"","content_url":"","title":"Th\u00e0nh l\u1eadp c\u00f4ng ty t\u1ea1i Belize","link":"","cutnumber":"50","vwidth":"400","vheight":"400","classpoint":"bg-transparent","bgcolor":"light","placement":"vertical","popwidth":"40%","popheight":"auto","details":"<div>\\n  Ch\u00ednh tr\u1ecb \u1ed5n \u0111\u1ecbnh, b\u1ea3o m\u1eadt th\u00f4ng tin doanh nghi\u1ec7p cao, chi ph\u00ed thu\u1ebf \u01b0u \u0111\u00e3i t\u00f9y theo t\u1eebng ng\u00e0nh ngh\u1ec1, v.v lu\u00f4n l\u00e0 nh\u1eefng y\u1ebfu t\u1ed1 h\u1ea5p d\u1eabn c\u00e1c Doanh nghi\u1ec7p n\u01b0\u1edbc ngo\u00e0i \u0111\u1ea7u t\u01b0 t\u1ea1i Belize.\\n<\/div>\\n<br \/>\\n<div>\\n  <a href=\\"\/vi\/thanh-lap-cong-ty-tai-nuoc-ngoai\/thanh-lap-cong-ty-tai-belize\\" class=\\"glac-map-readmore\\" style=\\"font-weight: bold\\"\\n    >\u0110\u1ecdc ti\u1ebfp\\n  <\/a>\\n<\/div>","imgid":"3111"},"31111":{"ptype":"image","ptype_image":"images\/flag\/location-british-virgin-islands.png#joomlaImage:\/\/local-images\/flag\/location-british-virgin-islands.png?width=256&height=256","icon":"map-marker","iconcolor":"#ffffff","offsetx":"28.58","offsety":"50.23","iconsize":"40","iconanchorx":"-50","iconanchory":"-50","jasetimage":"","content_type":"default","content_img":"","content_url":"","title":"Th\u00e0nh l\u1eadp c\u00f4ng ty t\u1ea1i British Virgin Islands","link":"","cutnumber":"50","vwidth":"400","vheight":"400","classpoint":"bg-transparent","bgcolor":"light","placement":"vertical","popwidth":"40%","popheight":"auto","details":"<div>\\n  C\u00f4ng ty Offshore v\u1edbi nh\u1eefng \u01b0u \u0111\u00e3i h\u1ea5p d\u1eabn \u0111\u1ebfn t\u1eeb: \u01b0u \u0111\u00e3i thu\u1ebf, b\u1ea3o m\u1eadt th\u00f4ng tin, quy tr\u00ecnh th\u00e0nh l\u1eadp c\u00f4ng ty v\u00e0 c\u00e1c th\u1ee7 t\u1ee5c thu\u1ebf k\u1ebf to\u00e1n \u0111\u01a1n gi\u1ea3n, v.v \u0111\u00e3 khi\u1ebfn BVI tr\u1edf th\u00e0nh l\u1ef1a ch\u1ecdn \u0111\u00e1ng ch\u00fa \u00fd c\u1ee7a c\u00e1c nh\u00e0 \u0111\u1ea7u t\u01b0 n\u01b0\u1edbc ngo\u00e0i.\\n<\/div>\\n<br \/>\\n<div>\\n  <a href=\\"\/vi\/thanh-lap-cong-ty-tai-nuoc-ngoai\/thanh-lap-cong-ty-tai-bvi\\" class=\\"glac-map-readmore\\" style=\\"font-weight: bold\\"\\n    >\u0110\u1ecdc ti\u1ebfp\\n  <\/a>\\n<\/div>","imgid":"31111"},"311":{"ptype":"image","ptype_image":"images\/flag\/location-canada.png#joomlaImage:\/\/local-images\/flag\/location-canada.png?width=256&height=256","icon":"map-marker","iconcolor":"#ffffff","offsetx":"19.91","offsety":"22.95","iconsize":"40","iconanchorx":"-50","iconanchory":"-50","jasetimage":"","content_type":"default","content_img":"","content_url":"","title":"Th\u00e0nh l\u1eadp c\u00f4ng ty t\u1ea1i Canada","link":"","cutnumber":"50","vwidth":"400","vheight":"400","classpoint":"bg-transparent","bgcolor":"light","placement":"vertical","popwidth":"40%","popheight":"auto","details":"<div>\\n      Gi\u00e1 tr\u1ecb th\u01b0\u01a1ng hi\u1ec7u cao, m\u00f4i tr\u01b0\u1eddng kinh doanh th\u00e2n thi\u1ec7n, y\u00eau c\u1ea7u th\u00e0nh l\u1eadp c\u00f4ng ty \u0111\u01a1n gi\u1ea3n \u0111\u00e3 thu h\u00fat nhi\u1ec1u nh\u00e0\\n      \u0111\u1ea7u t\u01b0 n\u01b0\u1edbc ngo\u00e0i m\u1edf c\u00f4ng ty t\u1ea1i \u0111\u00e2y.\\n    <\/div>\\n    <br \/>\\n    <div>\\n      <a href=\\"\/vi\/thanh-lap-cong-ty-tai-nuoc-ngoai\/thanh-lap-cong-ty-tai-canada\\" class=\\"glac-map-readmore\\" style=\\"font-weight: bold\\"\\n        >\u0110\u1ecdc ti\u1ebfp\\n      <\/a>\\n    <\/div>","imgid":"311"},"31111111":{"ptype":"image","ptype_image":"images\/flag\/location-hong-kong.png#joomlaImage:\/\/local-images\/flag\/location-hong-kong.png?width=256&height=256","icon":"map-marker","iconcolor":"#ffffff","offsetx":"82.11","offsety":"46.12","iconsize":"40","iconanchorx":"-48","iconanchory":"-65","jasetimage":"","content_type":"default","content_img":"","content_url":"","title":"Th\u00e0nh l\u1eadp c\u00f4ng ty t\u1ea1i H\u1ed3ng K\u00f4ng","link":"","cutnumber":"50","vwidth":"400","vheight":"400","classpoint":"bg-transparent","bgcolor":"light","placement":"vertical","popwidth":"40%","popheight":"auto","details":"<div>\\n  \u01afu \u0111\u00e3i thu\u1ebf v\u00e0 nh\u1eefng l\u1ee3i \u00edch h\u1ea5p d\u1eabn ph\u00f9 h\u1ee3p cho nh\u1eefng doanh nghi\u1ec7p c\u00f4ng ngh\u1ec7, qu\u1ea3ng c\u00e1o th\u00e0nh l\u1eadp c\u00f4ng ty n\u01b0\u1edbc ngo\u00e0i t\u1ea1i \u0111\u00e2y.\\n<\/div>\\n<br \/>\\n<div>\\n  <a href=\\"\/vi\/thanh-lap-cong-ty-tai-nuoc-ngoai\/thanh-lap-cong-ty-tai-hong-kong\\" class=\\"glac-map-readmore\\" style=\\"font-weight: bold\\"\\n    >\u0110\u1ecdc ti\u1ebfp\\n  <\/a>\\n<\/div>","imgid":"31111111"},"3111111111":{"ptype":"image","ptype_image":"images\/flag\/location-malaysia.png#joomlaImage:\/\/local-images\/flag\/location-malaysia.png?width=256&height=256","icon":"map-marker","iconcolor":"#ffffff","offsetx":"77.97","offsety":"57.32","iconsize":"40","iconanchorx":"-50","iconanchory":"-50","jasetimage":"","content_type":"default","content_img":"","content_url":"","title":"Th\u00e0nh l\u1eadp c\u00f4ng ty t\u1ea1i Malaysia","link":"","cutnumber":"50","vwidth":"400","vheight":"400","classpoint":"bg-transparent","bgcolor":"light","placement":"vertical","popwidth":"40%","popheight":"auto","details":"<div>\\n  \u01afu \u0111\u00e3i thu\u1ebf, n\u1ec1n kinh t\u1ebf n\u1eb1m trong top \u0111\u1ea7u \u0110\u00f4ng Nam \u00c1, quy tr\u00ecnh m\u1edf c\u00f4ng ty \u0111\u01a1n gi\u1ea3n, nhanh ch\u00f3ng, v.v. \u0111\u00e3 thu h\u00fat nhi\u1ec1u Doanh nghi\u1ec7p n\u01b0\u1edbc ngo\u00e0i m\u1edf c\u00f4ng ty t\u1ea1i \u0111\u00e2y.\\n<\/div>\\n<br \/>\\n<div>\\n  <a href=\\"\/vi\/thanh-lap-cong-ty-tai-nuoc-ngoai\/thanh-lap-cong-ty-tai-malaysia\\" class=\\"glac-map-readmore\\" style=\\"font-weight: bold\\"\\n    >\u0110\u1ecdc ti\u1ebfp\\n  <\/a>\\n<\/div>","imgid":"3111111111"},"31":{"ptype":"image","ptype_image":"images\/flag\/location-united-states.png#joomlaImage:\/\/local-images\/flag\/location-united-states.png?width=256&height=256","icon":"map-marker","iconcolor":"#ffffff","offsetx":"20.21","offsety":"37.64","iconsize":"40","iconanchorx":"-50","iconanchory":"-50","jasetimage":"","content_type":"default","content_img":"","content_url":"","title":"Th\u00e0nh l\u1eadp c\u00f4ng ty t\u1ea1i M\u1ef9","link":"","cutnumber":"50","vwidth":"400","vheight":"400","classpoint":"bg-transparent","bgcolor":"light","placement":"vertical","popwidth":"40%","popheight":"auto","details":"<div>\\n  Trung t\u00e2m t\u00e0i ch\u00ednh v\u00e0 kinh t\u1ebf l\u1edbn th\u1ebf gi\u1edbi. T\u1eadp trung c\u00e1c t\u1eadp \u0111o\u00e0n, c\u00f4ng ty l\u1edbn tr\u00ean th\u1ebf gi\u1edbi th\u00e0nh l\u1eadp c\u00f4ng ty\\n  n\u01b0\u1edbc ngo\u00e0i t\u1ea1i M\u1ef9 \u0111\u1ec3 m\u1edf r\u1ed9ng th\u1ecb tr\u01b0\u1eddng qu\u1ed1c t\u1ebf v\u00e0 n\u00e2ng cao v\u1ecb th\u1ebf th\u01b0\u01a1ng hi\u1ec7u.\\n<\/div>\\n<br \/>\\n<div>\\n  <a href=\\"\/vi\/thanh-lap-cong-ty-tai-nuoc-ngoai\/thanh-lap-cong-ty-tai-my\\" class=\\"glac-map-readmore\\" style=\\"font-weight: bold\\"\\n    >\u0110\u1ecdc ti\u1ebfp \\n  <\/a>\\n<\/div>","imgid":"31"},"311111111111":{"ptype":"image","ptype_image":"images\/flag\/location-marshall-island.png#joomlaImage:\/\/local-images\/flag\/location-marshall-island.png?width=256&height=256","icon":"map-marker","iconcolor":"#ffffff","offsetx":"93.99","offsety":"64.59","iconsize":"40","iconanchorx":"-50","iconanchory":"-50","jasetimage":"","content_type":"default","content_img":"","content_url":"","title":"Th\u00e0nh l\u1eadp c\u00f4ng ty t\u1ea1i Qu\u1ea7n \u0111\u1ea3o Marshall","link":"","cutnumber":"50","vwidth":"400","vheight":"400","classpoint":"bg-transparent","bgcolor":"light","placement":"vertical","popwidth":"40%","popheight":"auto","details":"<div>\\n  Qu\u1ea7n \u0111\u1ea3o Marshall mang \u0111\u1ebfn cho c\u00e1c ch\u1ee7 doanh nghi\u1ec7p c\u01a1 h\u1ed9i ti\u1ec1m n\u0103ng \u0111\u1ec3 m\u1edf r\u1ed9ng kinh doanh to\u00e0n c\u1ea7u. T\u1eadn h\u01b0\u1edfng c\u00e1c l\u1ee3i th\u1ebf h\u1ea5p d\u1eabn nh\u01b0 kh\u00f4ng ki\u1ec3m so\u00e1t ngo\u1ea1i h\u1ed1i \u0111\u1ed1i v\u1edbi c\u00e1c giao d\u1ecbch n\u01b0\u1edbc ngo\u00e0i, ch\u1ebf \u0111\u1ed9 thu\u1ebf \u01b0u \u0111\u00e3i, ch\u00ednh s\u00e1ch b\u1ea3o m\u1eadt, v.v.\\n<\/div>\\n<br \/>\\n<div>\\n  <a href=\\"#\\" class=\\"glac-map-readmore\\" style=\\"font-weight: bold\\"\\n    >\u0110\u1ecdc ti\u1ebfp\\n  <\/a>\\n<\/div>","imgid":"311111111111"},"3111111":{"ptype":"image","ptype_image":"images\/flag\/location-seychelles.png#joomlaImage:\/\/local-images\/flag\/location-seychelles.png?width=256&height=256","icon":"map-marker","iconcolor":"#ffffff","offsetx":"64.61","offsety":"62.50","iconsize":"40","iconanchorx":"-50","iconanchory":"-50","jasetimage":"","content_type":"default","content_img":"","content_url":"","title":"Th\u00e0nh l\u1eadp c\u00f4ng ty t\u1ea1i Seychelles","link":"","cutnumber":"50","vwidth":"400","vheight":"400","classpoint":"bg-transparent","bgcolor":"light","placement":"vertical","popwidth":"40%","popheight":"auto","details":"<div>\\n  Qu\u1ed1c gia Offshore v\u1edbi \u0111\u1ed9 b\u1ea3o m\u1eadt cao, m\u1ee9c thu\u1ebf th\u1ea5p, kh\u00f4ng y\u00eau c\u1ea7u b\u00e1o c\u00e1o t\u00e0i ch\u00ednh, quy tr\u00ecnh m\u1edf c\u00f4ng ty \u0111\u01a1n gi\u1ea3n, nhanh ch\u00f3ng. Nh\u1eefng \u01b0u \u0111\u00e3i h\u1ea5p d\u1eabn t\u1eadp trung khi th\u00e0nh l\u1eadp c\u00f4ng ty n\u01b0\u1edbc ngo\u00e0i t\u1ea1i Seychelles. \\n<\/div>\\n<br \/>\\n<div>\\n  <a href=\\"\/vi\/thanh-lap-cong-ty-tai-nuoc-ngoai\/thanh-lap-cong-ty-tai-seychelles\\" class=\\"glac-map-readmore\\" style=\\"font-weight: bold\\"\\n    >\u0110\u1ecdc ti\u1ebfp\\n  <\/a>\\n<\/div>","imgid":"3111111"},"31111111111":{"ptype":"image","ptype_image":"images\/flag\/location-singapore.png#joomlaImage:\/\/local-images\/flag\/location-singapore.png?width=256&height=256","icon":"map-marker","iconcolor":"#ffffff","offsetx":"79.82","offsety":"54.95","iconsize":"40","iconanchorx":"-37","iconanchory":"20","jasetimage":"","content_type":"default","content_img":"","content_url":"","title":"Th\u00e0nh l\u1eadp c\u00f4ng ty t\u1ea1i Singapore","link":"","cutnumber":"50","vwidth":"400","vheight":"400","classpoint":"bg-transparent","bgcolor":"light","placement":"vertical","popwidth":"40%","popheight":"auto","details":"<div>\\n  Trung t\u00e2m t\u00e0i ch\u00ednh th\u1ebf gi\u1edbi, n\u1ec1n kinh t\u1ebf top \u0111\u1ea7u khu v\u1ef1c \u0110\u00f4ng Nam \u00c1. S\u1ef1 ph\u00e1t tri\u1ec3n \u0111a d\u1ea1ng v\u1ec1 kinh t\u1ebf v\u00e0 t\u00e0i ch\u00ednh \u0111\u00e3 \u0111\u01b0a qu\u1ed1c \u0111\u1ea3o Singapore tr\u1edf th\u00e0nh l\u1ef1a ch\u1ecdn c\u1ee7a nhi\u1ec1u doanh nghi\u1ec7p n\u01b0\u1edbc ngo\u00e0i.\\n<\/div>\\n<br \/>\\n<div>\\n  <a href=\\"\/vi\/thanh-lap-cong-ty-tai-nuoc-ngoai\/thanh-lap-cong-ty-tai-singapore\\" class=\\"glac-map-readmore\\" style=\\"font-weight: bold\\"\\n    >\u0110\u1ecdc ti\u1ebfp\\n  <\/a>\\n<\/div>","imgid":"31111111111"},"311111111":{"ptype":"image","ptype_image":"images\/flag\/location-thailand.png#joomlaImage:\/\/local-images\/flag\/location-thailand.png?width=256&height=256","icon":"map-marker","iconcolor":"#ffffff","offsetx":"76.63","offsety":"46.83","iconsize":"40","iconanchorx":"-50","iconanchory":"-50","jasetimage":"","content_type":"default","content_img":"","content_url":"","title":"Th\u00e0nh l\u1eadp c\u00f4ng ty t\u1ea1i Th\u00e1i Lan","link":"","cutnumber":"50","vwidth":"400","vheight":"400","classpoint":"bg-transparent","bgcolor":"light","placement":"vertical","popwidth":"40%","popheight":"auto","details":"<div>\\n  Qu\u1ed1c gia ph\u00e1t tri\u1ec3n v\u1ec1 du l\u1ecbch, xu\u1ea5t kh\u1ea9u n\u1ed5i ti\u1ebfng khu v\u1ef1c ch\u00e2u \u00c1, ph\u00f9 h\u1ee3p v\u1edbi nh\u1eefng doanh nghi\u1ec7p s\u1ea3n xu\u1ea5t n\u00f4ng nghi\u1ec7p, h\u00e0ng h\u00f3a, du l\u1ecbch m\u1edf c\u00f4ng ty n\u01b0\u1edbc ngo\u00e0i t\u1ea1i \u0111\u00e2y.\\n<\/div>\\n<br \/>\\n<div>\\n  <a href=\\"\/vi\/thanh-lap-cong-ty-tai-nuoc-ngoai\/thanh-lap-cong-ty-tai-thai-lan\\" class=\\"glac-map-readmore\\" style=\\"font-weight: bold\\"\\n    >\u0110\u1ecdc ti\u1ebfp\\n  <\/a>\\n<\/div>","imgid":"311111111"},"3111111111111":{"ptype":"image","ptype_image":"images\/flag\/location-australia.png#joomlaImage:\/\/local-images\/flag\/location-australia.png?width=256&height=256","icon":"map-marker","iconcolor":"#ffffff","offsetx":"87.69","offsety":"77.63","iconsize":"40","iconanchorx":"-36","iconanchory":"-70","jasetimage":"","content_type":"default","content_img":"","content_url":"","title":"Th\u00e0nh l\u1eadp c\u00f4ng ty t\u1ea1i \u00dac","link":"","cutnumber":"50","vwidth":"400","vheight":"400","classpoint":"bg-transparent","bgcolor":"light","placement":"vertical","popwidth":"40%","popheight":"auto","details":"<div>\\n  N\u1ec1n kinh t\u1ebf \u1ed5n \u0111\u1ecbnh v\u00e0 b\u1ec1n v\u1eefng, ch\u00ednh s\u00e1ch khuy\u1ebfn kh\u00edch ph\u00e1t tri\u1ec3n cho nh\u00e0 \u0111\u1ea7u t\u01b0 n\u01b0\u1edbc ngo\u00e0i, tr\u00ecnh \u0111\u1ed9 c\u00f4ng ngh\u1ec7 cao v\u00e0 s\u1ee9c ti\u00eau th\u1ee5 l\u1edbn t\u1ea1i \u0111\u00e2y c\u0169ng ch\u00ednh l\u00e0 nh\u1eefng y\u1ebfu t\u1ed1 h\u1ea5p d\u1eabn Doanh nghi\u1ec7p th\u00e0nh l\u1eadp c\u00f4ng ty n\u01b0\u1edbc ngo\u00e0i t\u1ea1i \u00dac.\\n<\/div>\\n<br \/>\\n<div>\\n  <a href=\\"\/vi\/thanh-lap-cong-ty-tai-nuoc-ngoai\/thanh-lap-cong-ty-tai-uc\\" class=\\"glac-map-readmore\\" style=\\"font-weight: bold\\"\\n    >\u0110\u1ecdc ti\u1ebfp\\n  <\/a>\\n<\/div>","imgid":"3111111111111"}}',
  );
  var jaihp_settings = {
    hideDelay: 600,
    trigger: "hover",
    multiple: 0,
    anim: "pop",
  };
  $(window).on("load", function () {
    scaleIconFollowScreen("ja-hotspot-image-969", "ja-imagesmap969");
    addHammerJS("ja-imagesmap969", 5, 1);
    if ($("#ja-imagesmap969 #cd-dropdown").hasClass("chzn-done"))
      $("#ja-imagesmap969 #cd-dropdown").chosen("destroy");
    $("#ja-imagesmap969 #cd-dropdown").jadropdown({ gutter: 0, stack: false });
    $("#ja-imagesmap969 .cd-dropdown ul li").click(function () {
      target = $(this).attr("data-value");
      setTimeout(function () {
        WebuiPopovers.show("#ja-imagesmap969 #" + target + " .bg");
      }, 100);
    });
    $("#ja-imagesmap969 a.point").each(function () {
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
      scaleIconFollowScreen("ja-hotspot-image-969", "ja-imagesmap969");
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
  var pageid = "28";
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
