import { App } from './app.js'


// Calling the App object
new App();

window.addEventListener("load", () => {
    const loading = document.querySelector("#loading")
    loading.classList.add(".fade-out")

    setTimeout(() => {
        loading.style.display = "none"
    }, 600)
})