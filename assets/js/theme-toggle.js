(function () {
  const root = document.documentElement;
  const storedTheme = localStorage.getItem("theme");
  const defaultTheme = "mint";

  function applyTheme(theme) {
    root.setAttribute("data-skin", theme);
    localStorage.setItem("theme", theme);
  }

  document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("theme-toggle");
    if (!toggleBtn) return;

    const theme = storedTheme || defaultTheme;
    applyTheme(theme);

    toggleBtn.addEventListener("click", function () {
      const newTheme = root.getAttribute("data-skin") === "dark" ? "mint" : "dark";
      applyTheme(newTheme);
    });
  });
})();
