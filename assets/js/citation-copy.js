(function () {
  function fallbackCopy(text) {
    var input = document.createElement("textarea");
    input.value = text;
    input.setAttribute("readonly", "");
    input.style.position = "fixed";
    input.style.opacity = "0";
    document.body.appendChild(input);
    input.select();
    var copied = document.execCommand("copy");
    document.body.removeChild(input);
    return copied;
  }

  document.addEventListener("click", function (event) {
    var button = event.target.closest("[data-copy-citation]");
    if (!button) return;

    var panel = button.closest(".publication-citation-panel");
    var code = panel && panel.querySelector("code");
    if (!code) return;

    var text = code.textContent.trim();
    var copy = navigator.clipboard && window.isSecureContext
      ? navigator.clipboard.writeText(text).then(function () { return true; })
      : Promise.resolve(fallbackCopy(text));

    copy.then(function (copied) {
      button.textContent = copied ? "Copied" : "Select text";
      window.setTimeout(function () { button.textContent = "Copy"; }, 1800);
    }).catch(function () {
      button.textContent = fallbackCopy(text) ? "Copied" : "Select text";
      window.setTimeout(function () { button.textContent = "Copy"; }, 1800);
    });
  });
})();
