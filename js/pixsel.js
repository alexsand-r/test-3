(function () {
  const gridSize = 2; // Размер сетки в пикселях
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.pointerEvents = "none";
  overlay.style.zIndex = "9999";
  overlay.style.backgroundImage = `linear-gradient(to right, rgba(255, 0, 0, 0.4) 1px, transparent 1px),
                                     linear-gradient(to bottom, rgba(255, 0, 0, 0.4) 1px, transparent 1px)`;
  overlay.style.backgroundSize = `${gridSize}px ${gridSize}px`;
  document.body.appendChild(overlay);
})();
