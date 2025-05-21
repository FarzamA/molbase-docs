document.addEventListener("DOMContentLoaded", () => {
  const statusEl = document.getElementById("app-status-indicator");
  if (!statusEl) return;

  fetch("/status/status.txt")
    .then(res => res.text())
    .then(text => {
      if (text.includes("200 OK")) {
        statusEl.textContent = "🟢 Online";
        statusEl.style.color = "limegreen";
      } else {
        statusEl.textContent = "🚧 Under Maintenance";
        statusEl.style.color = "orange";
      }
    })
    .catch(() => {
      statusEl.textContent = "⚠️ Unknown";
      statusEl.style.color = "gray";
    });
});
