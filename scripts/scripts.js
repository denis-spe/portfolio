class Dataclass{
  // Get the open and close button
  static openMenuBtn = document.querySelector("#open-menu-btn")
  static closeMenuBtn = document.querySelector("#close-menu-btn")
  
  // Get the aside tag
  static aside = document.querySelector("aside")
}



class App{
  // Private variable
  #context
  
  // Constructor
  constructor(){
    var context = this 
    
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
      Dataclass.aside.style.display = "block"
    })
  }
  
  /**
   * Handle close menu button
   */
  closeMenuBtn(){
    Dataclass.closeMenuBtn.addEventListener("click", () => {
      Dataclass.aside.style.display = "none"
    })
  }
}


// Calling the App object
new App();