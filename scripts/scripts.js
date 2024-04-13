class Dataclass {
  // Get the open and close button
  static menuBtn = document.querySelector("#menu-btn");

  // Get the aside tag
  static aside = document.querySelector("aside");

  // Header tag
  static header = document.querySelector("header");

  // Main title
  static mainTitle = document.querySelector(".header-title-container");

  // Aside contents
  static asideContents = document.querySelector(".aside-contents")
  static praise = document.querySelector(".praise") // In aside
}



class App {

  // Constructor
  constructor() {
    var context = this;

    document.addEventListener("DOMContentLoaded", function() {
      context.MenuBtn()
    })
  }

  openAsideMenu() {
    Dataclass.header.style = `
    justify-content: end;
    background: none;
    `

    // Hide the main title
    Dataclass.mainTitle.style.display = "none";
    
    Dataclass.menuBtn.classList.remove("show-menu-btn");
    setTimeout(() => {
      Dataclass.menuBtn.classList.add("close-menu-btn");
      Dataclass.asideContents.style.display = 'flex'
      Dataclass.praise.style.display = 'flex'
    }, 100);

    // Remove the close aside class from aside tag.
    Dataclass.aside.classList.remove('close-aside')
    
    // Then add open aside class to aside tag.
    Dataclass.aside.classList.add('open-aside');

    // Disable the scroll on body.
    document.body.style.overflow = "hidden"

    navigator.vibrate(50);
  }

  closeAsideMenu() {
    Dataclass.header.style = `
    justify-content: space-between;
    background: var(--header-bg);
    backdrop-filter: var(--header-blur);
    `
    Dataclass.mainTitle.style.display = "flex";
    
    Dataclass.menuBtn.classList.remove("close-menu-btn");
    Dataclass.menuBtn.classList.add("show-menu-btn");
    Dataclass.asideContents.style.display = 'none'
    Dataclass.praise.style.display = 'none'

    // Remove open aside class from aside tag.
    Dataclass.aside.classList.remove('open-aside')

    // Then add close aside class to aside tag.
    Dataclass.aside.classList.add('close-aside');

    // Enable the scroll on body
    document.body.style.overflow = "auto"
  }

  // Methods
  /**
   * Handle open menu button
   */
  MenuBtn() {
    Dataclass.menuBtn.addEventListener("click", () => {

      const clicked = Dataclass.menuBtn.classList.toggle('c');

      if (clicked) {
        this.openAsideMenu()
      } else {
        this.closeAsideMenu()
      }

    })
  }
}


// Calling the App object
new App();