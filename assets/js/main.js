"use strict";

const themeToggle = document.getElementById("theme-toggle");

const changeTheme = () =>
{
    let theme = matchMedia("(prefers-color-scheme: dark)").matches ? "light" : "dark";

    if (document.documentElement.getAttribute("data-theme"))
        theme = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", theme);
}

themeToggle.addEventListener("click", changeTheme);

matchMedia("(prefers-color-scheme: dark)").addEventListener("change", changeTheme);