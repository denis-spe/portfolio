class Dataclass{
  // Get the open and close button
  static openMenuBtn = document.querySelector("#open-menu-btn");
  
  // Fetch all spans in open-menu-btn id
  static openMenuBtnSpans = document.querySelectorAll("#open-menu-btn span");
  
  static closeMenuBtn = document.querySelector("#close-menu-btn");
  
  // Fetch all spans in close-menu-btn id
  static closeMenuBtnSpans = document.querySelectorAll("#close-menu-btn span");
  
  // Get the aside tag
  static aside = document.querySelector("aside");
  
  // Is the menu button clicked?
  static isMenuBtnClicked = false
}



class App{
  
  // Constructor
  constructor(){
    var context = this;
    
    document.addEventListener("DOMContentLoaded", function() {
      context.openMenuBtn()
      context.closeMenuBtn()
    })
  }
  
  // Methods
  /**
   * Handle open menu button
   */
  openMenuBtn(){
    Dataclass.openMenuBtn.addEventListener("click", () => {
      Dataclass.aside.style.display = "block";
      setInterval(() => {
        Dataclass.closeMenuBtn.style.display = "flex";
      }, 500)
    })
  }
  
  /**
   * Handle close menu button
   */
  closeMenuBtn(){
    Dataclass.closeMenuBtn.addEventListener("click", () => {
      Dataclass.aside.style.display = "none";
    })
  }
}


// Calling the App object
new App();