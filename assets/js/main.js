"use strict";

const themeToggle = document.getElementById("theme-toggle");

class Preferences
{
    static get(key) { return localStorage.getItem(key); }

    static set(key, value) { localStorage.setItem(key, value); }
}

const changeTheme = (theme) =>
{
    document.documentElement.setAttribute("data-theme", theme);

    Preferences.set("theme", theme);
}

themeToggle.addEventListener("click", () => changeTheme(document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark"));

matchMedia("(prefers-color-scheme: dark)").addEventListener("change", e => changeTheme(e.matches ? "dark" : "light"));

changeTheme(Preferences.get("theme"));