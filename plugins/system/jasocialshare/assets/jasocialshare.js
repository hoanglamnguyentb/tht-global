document.addEventListener("DOMContentLoaded", () => {
  async function renderButtons($elm) {
    const services = $elm.getAttribute("services") || "";
    const layout = $elm.getAttribute("layout") || "default";
    const rootUri = Joomla.getOptions("system.paths").root;
    const formData = new FormData();

    formData.append("layout", layout);
    formData.append("url", location.href);
    formData.append("services", services);

    $elm.getAttribute("showcount") &&
      formData.append("showcount", $elm.getAttribute("showcount"));
    $elm.getAttribute("showtext") &&
      formData.append("showtext", $elm.getAttribute("showtext"));
    $elm.getAttribute("buttonsize") &&
      formData.append("buttonsize", $elm.getAttribute("buttonsize"));
    $elm.getAttribute("buttonstyle") &&
      formData.append("buttonstyle", $elm.getAttribute("buttonstyle"));

    const endpoint =
      rootUri +
      "/index.php?option=com_ajax&plugin=jasocialshare&group=system&jasocialshare&format=json&ja_ajax_task=renderButtons";

    const res = await fetch(endpoint, {
      method: "POST",
      body: formData,
    });
    const resData = await res.json();
    if (resData.success) {
      $elm.innerHTML = resData.data[0];
    }
  }

  const excluded = Joomla.getOptions("ja-share-excluded");
  excluded.forEach((selector) => {
    const $elms = document.querySelectorAll(`${selector} .ja-share-button`);

    $elms.forEach(($elm) => {
      $elm.setAttribute("excluded", true);
    });
  });

  document.querySelectorAll(".ja-share-button").forEach(($elm) => {
    if ($elm.getAttribute("excluded")) {
      return;
    }

    renderButtons($elm);
  });

  window.jasocialshare = (event) => {
    const $elm = event.currentTarget;

    if ($elm.dataset.service === "email") {
      location.href =
        "mailto:?subject=" +
        encodeURIComponent(Joomla.JText._("JASOCIALSHARE_EMAIL_SUBJECT")) +
        "&body=" +
        encodeURIComponent(location.href);
    } else {
      const w = 600;
      const h = 600;
      const top =
        window.screenTop < 0
          ? window.screenTop + h / 3
          : (window.screen.height - h - 70) / 2;
      const left =
        window.screenLeft < 0
          ? (window.screenLeft - w) / 2
          : window.screenLeft + w + 60;

      window.open(
        $elm.dataset.href,
        "center window",
        `scrollbars=yes,resizable=yes,height=${h}, width=${w}, top=${top}, left=${left}`,
      );
    }
  };
});
