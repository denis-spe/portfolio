class Dataclass {
  // Get the open and close button
  static openMenuBtn = document.querySelector("#open-menu-btn");

  // Fetch all spans in open-menu-btn id
  static openMenuBtnSpans = document.querySelectorAll("#open-menu-btn span");

  static closeMenuBtn = document.querySelector("#close-menu-btn");

  // Fetch all spans in close-menu-btn id
  static closeMenuBtnSpans = document.querySelectorAll("#close-menu-btn span");

  // Get the aside tag
  static aside = document.querySelector("aside");

  // Header tag
  static header = document.querySelector("header");

  // Main title
  static mainTitle = document.querySelector(".main-title-container");

  // Aside contents
  static asideContents = document.querySelector(".aside-contents")
}



class App {

  // Constructor
  constructor() {
    var context = this;

    document.addEventListener("DOMContentLoaded", function() {
      context.openMenuBtn()
      context.closeMenuBtn()
    })
  }

  openAsideMenu() {
    Dataclass.header.style = `
    justify-content: end;
    background: none;
    `

    // Hide the main title
    Dataclass.mainTitle.style.display = "none";
    
    Dataclass.openMenuBtn.classList.remove("show-menu-btn");
    setTimeout(() => {
      Dataclass.openMenuBtn.classList.add("close-menu-btn");
      Dataclass.asideContents.style.display = 'flex'
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
    background: aquamarine;
    `
    Dataclass.mainTitle.style.display = "block";
    
    Dataclass.openMenuBtn.classList.remove("close-menu-btn");
    Dataclass.openMenuBtn.classList.add("show-menu-btn");
    Dataclass.asideContents.style.display = 'none'

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
  openMenuBtn() {

    Dataclass.openMenuBtn.addEventListener("click", () => {

      /*setTimeout(() => {
        navigator.vibrate(0); // Stop the vibration after 3 seconds
      }, 100);*/
      /*

      // Remove the close aside class from aside tag.
      Dataclass.aside.classList.remove('close-aside')
      // Then add open aside class to aside tag.
      Dataclass.aside.classList.add('open-aside');

      // Remove hide close aside menu button
      // from close menu button in aside tag
      Dataclass.closeMenuBtn.classList.remove('hide-close-aside-menu-btn')

      setTimeout(() => {
        // Show close menu button after the 
        // opening aside
        Dataclass.closeMenuBtn.classList.add('show-close-aside-menu-btn');
      }, 100)

      // Disable the scroll on body.
      document.body.style.overflow = "hidden"
      
      navigator.vibrate(50);
      */

      const clicked = Dataclass.openMenuBtn.classList.toggle('c');

      if (clicked) {
        this.openAsideMenu()
      } else {
        this.closeAsideMenu()
      }

    })
  }

  /**
   * Handle close menu button
   */
  closeMenuBtn() {
    Dataclass.closeMenuBtn.addEventListener("click", () => {
      // Remove open aside class from aside tag.
      Dataclass.aside.classList.remove('open-aside')

      // Then add close aside class to aside tag.
      Dataclass.aside.classList.add('close-aside');

      // Remove show close aside menu button
      // from close menu button in aside tag
      Dataclass.closeMenuBtn.classList.remove('show-close-aside-menu-btn')

      // Add hide close menu button when the 
      // closing aside
      Dataclass.closeMenuBtn.classList.add('hide-close-aside-menu-btn')

      // Enable the scroll on body
      document.body.style.overflow = "auto"

    })
  }
}


// Calling the App object
new App();