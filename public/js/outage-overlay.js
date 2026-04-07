document.addEventListener("DOMContentLoaded", function () {
  document.body.style.overflow = "hidden";

  var overlay = document.createElement("div");
  overlay.setAttribute("id", "outage-overlay");
  overlay.style.position = "fixed";
  overlay.style.inset = "0";
  overlay.style.zIndex = "999999";
  overlay.style.background = "#ffffff";
  overlay.style.display = "flex";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";
  overlay.style.textAlign = "center";
  overlay.style.padding = "24px";
  overlay.style.fontFamily = "Arial, sans-serif";
  overlay.style.fontSize = "32px";
  overlay.style.fontWeight = "700";
  overlay.style.color = "#111111";
  overlay.style.lineHeight = "1.3";

  overlay.textContent = "Access suspended temporarily because of an outstanding payment.";
  document.body.appendChild(overlay);
});
