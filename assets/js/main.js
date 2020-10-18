"use strict";

const themeToggle = document.getElementById("theme-toggle");

const changeTheme = (mediaQueryOnly) =>
{
    let theme = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";

    if (!mediaQueryOnly && document.documentElement.getAttribute("data-theme"))
        theme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", theme);
}

themeToggle.addEventListener("click", () => changeTheme(false));

matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => changeTheme(true));

changeTheme();