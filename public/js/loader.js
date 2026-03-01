(() => {
  const IS_DARK = window.matchMedia("(prefers-color-scheme: dark)").matches;
  function getCookie(cname) {
    let name = cname + "=";
    let cookies = decodeURIComponent(document.cookie).split(";");
    for (let i = 0; i < cookies.length; i++) {
      let cookie = cookies[i];
      while (cookie.charAt(0) == " ") cookie = cookie.substring(1);
      if (cookie.indexOf(name) == 0)
        return cookie.substring(name.length, cookie.length);
    }
    return;
  }
  const mode = getCookie("mode");
  document.documentElement.classList.toggle(
    "dark",
    mode ? mode === "dark" : IS_DARK,
  );

  let counter = 0;
  let load = !1;
  const httpFetch = window.fetch;

  const handLoad = () => {
    const loader = document.getElementById("init-load");

    if (counter <= 0 && load && loader) {
      setTimeout(() => {
        loader.setAttribute("style", "transition: opacity 2s ease; opacity:0");
        loader.addEventListener(
          "transitionend",
          () => {
            loader.remove();
            document
              .querySelectorAll('[data-loader="true"]')
              .forEach((element) => element.remove());
          },
          { once: true },
        );
      }, 2000);
    }
  };

  window.fetch = function () {
    counter++;
    handLoad();
    return httpFetch.apply(this, arguments).finally(() => {
      counter--;
      handLoad();
    });
  };

  window.addEventListener("load", () => {
    load = true;
    handLoad();
  });
})();
