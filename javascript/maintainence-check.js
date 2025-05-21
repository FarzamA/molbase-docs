document.addEventListener("DOMContentLoaded", () => {
  const statusEl = document.getElementById("app-status-indicator");
  if (!statusEl) return;

  function updateStatus(icon, color, label) {
    statusEl.textContent = `${icon} ${label}`;
    statusEl.style.color = color;
    statusEl.style.fontWeight = "bold";
    statusEl.style.marginLeft = "10px";
  }

  function checkStatus() {
    updateStatus("⏳", "gray", "Checking...");

    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = "https://docgenai.duckdns.org/login";

    iframe.onload = () => {
      updateStatus("🟢", "limegreen", "Online");
      document.body.removeChild(iframe);
    };

    iframe.onerror = () => {
      updateStatus("🚧", "orange", "Under Construction");
      document.body.removeChild(iframe);
    };

    // Add it to the DOM to trigger the load
    document.body.appendChild(iframe);
  }

  checkStatus();
  setInterval(checkStatus, 30_000);
});
