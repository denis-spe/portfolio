import {App} from './app.js'


// Calling the App object
new App();

window.addEventListener("load", () => {
    const loading = document.querySelector("#loading")
    const headerTitleContainer = document.querySelector(".header-title-container")
    const menuBtnContainer = document.querySelector(".menu-btn-container")
    const contactBrand = document.querySelector(".contact-brand")

    loading.classList.add(".fade-out")

    setTimeout(() => {
        loading.style.display = "none"
    }, 600)

    headerTitleContainer.classList.add("animate-title-on-start")
    menuBtnContainer.classList.add("animate-menu-btn-on-start")
    contactBrand.classList.add("animate-contact-brand-on-start")
})