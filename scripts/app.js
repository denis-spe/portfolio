import { Dataclass } from './dataclass.js'
import { intersection, arrowIntersection } from './intersection.js'
import { dataPreprocessing } from './handleData.js'

export class App {
  // Constructor
  constructor() {
    var context = this;
    
    document.addEventListener("DOMContentLoaded", function() {
      context.menuBtn();
      context.menuItems();
      context.background();
      context.fields();
      context.drawTitle()
      dataPreprocessing();
      arrowIntersection();
      intersection();
    });
  }

  drawTitle(){
    const vara = new Vara("#title-container", "https://rawcdn.githack.com/akzhy/Vara/ed6ab92fdf196596266ae76867c415fa659eb348/fonts/Satisfy/SatisfySL.json", [{
      text: "den",
      fontSize: 30,
      color: "#fff",
      fontFamily: "Comfortaa",
      x: 5
    }], {
      strokeWidth: 2,
      textAlign: "center"
    });
  }
  
  
  
  /**
   * Animate the list element
   */
  animateLi(element, delay, dur) {
    element.style = `
  animation-name: animate-li-element;
  animation-timing-function: ease;
  animation-duration: ${dur}ms;
  animation-fill-mode: forwards;
  animation-delay: ${delay}ms;
  `;
  }
  
  openAsideMenu() {
    Dataclass.header.style = `
    justify-content: end;
    background: none;
    `;
    const li = document.querySelectorAll("aside li");
    li.forEach((item, index) => {
      if (index == 0) this.animateLi(item, (index + 0.2) * 100, index * 20);
      else this.animateLi(item, index * 100, index * 20);
    });
    
    // Hide the main title
    Dataclass.mainTitle.style.display = "none";
    
    Dataclass.menuBtn.classList.remove("show-menu-btn");
    setTimeout(() => {
      Dataclass.menuBtn.classList.add("close-menu-btn");
      Dataclass.asideContents.style.display = "flex";
      Dataclass.praise.style.display = "flex";
    }, 100);
    
    // Remove the close aside class from aside tag.
    Dataclass.aside.classList.remove("close-aside");
    
    // Then add open aside class to aside tag.
    Dataclass.aside.classList.add("open-aside");
    
    // Disable the scroll on body.
    document.body.style.overflow = "hidden";
    
    navigator.vibrate(50);
  }
  
  closeAsideMenu() {
    Dataclass.header.style = `
    justify-content: space-between;
    background: var(--header-bg);
    backdrop-filter: var(--header-blur);
    `;
    Dataclass.mainTitle.style.display = "flex";
    
    Dataclass.menuBtn.classList.remove("close-menu-btn");
    Dataclass.menuBtn.classList.add("show-menu-btn");
    Dataclass.asideContents.style.display = "none";
    Dataclass.praise.style.display = "none";
    
    // Remove open aside class from aside tag.
    Dataclass.aside.classList.remove("open-aside");
    
    // Then add close aside class to aside tag.
    Dataclass.aside.classList.add("close-aside");
    
    // Enable the scroll on body
    document.body.style.overflow = "auto";
  }
  
  // Methods
  /**
   * Handle open menu button
   */
  menuBtn() {
    Dataclass.menuBtn.addEventListener("click", () => {
      const clicked = Dataclass.menuBtn.classList.toggle("c");
      if (clicked) {
        this.openAsideMenu();
      } else {
        this.closeAsideMenu();
      }
    });
  }
  
  menuItems() {
    const lists = document.querySelectorAll(".aside-contents ul li p")
    
    lists.forEach(li => {
      li.addEventListener("click", () => {
        this.menuItem(li.dataset.sectionId)
      })
    })
  }
  
  menuItem(sectionId) {
    const clicked = Dataclass.menuBtn.classList.toggle("c");
    if (clicked) {
      this.openAsideMenu();
    } else {
      this.closeAsideMenu();
      this.menuItmHyperlink(sectionId)
    }
  }
  
  menuItmHyperlink(sectionId) {
    document.querySelector(sectionId).scrollIntoView({
      behavior: 'smooth'
    })
  }
  
  
  
  background() {
    for (let i = 0; i < 180; i++) {
      // Create the div container with square class
      const div = document.createElement("div");
      div.classList.add("square");
      div.classList.add("square-" + i);
      
      // Append the div element to design container
      Dataclass.designContainer.appendChild(div);
    }
  }
  
  isMobile() {
    const userAgent = navigator.userAgent.toLowerCase();
    return /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
  }
  
  trackMouseMovement() {
    let animationFrame; // Declare animationFrame within the function
    
    document.addEventListener(this.isMobile() ? "touchmove" : "mousemove", (e) => {
      const x = this.isMobile() ? e.touches[0].clientX : e.clientX;
      const y = this.isMobile() ? e.touches[0].clientY : e.clientY;
      
      const squares = document.querySelectorAll(".square");
      
      // Cancel any pending animation frame
      cancelAnimationFrame(animationFrame);
      
      animationFrame = requestAnimationFrame(() => {
        squares.forEach((square) => {
          const squareX = square.offsetLeft;
          const squareY = square.offsetTop;
          const squareWidth = square.offsetWidth;
          const squareHeight = square.offsetHeight;
          const squareXCenter = squareX + squareWidth / 2;
          const squareYCenter = squareY + squareHeight / 2;
          const distanceX = x - squareXCenter;
          const distanceY = y - squareYCenter;
          
          // Calculate the distance from the mouse to the center of the square
          const distance = Math.sqrt(
            distanceX * distanceX + distanceY * distanceY
          );
          
          // Scale the distance to a value between 0 and 1
          const scale = Math.min(1, distance / 100);
          
          // Apply the scale to the transform property of the square
          square.style.transform = `scale(${1 - scale})`;
          
          // Change the background color based on the distance
          const color = `rgba(255, 255, 255, ${1 - scale})`;
          square.style.borderColor = color;
          square.style.borderWidth = `${scale * 10}px`;
          square.style.borderStyle = "solid";
          
          if (scale > 0.8) {
            square.style.opacity = 0;
          } else {
            square.style.opacity = 1;
          }
        });
      });
    });
    
    document.addEventListener(this.isMobile() ? "touchend" : "mouseleave", () => {
      cancelAnimationFrame(animationFrame);
      const squares = document.querySelectorAll(".square");
      squares.forEach((square) => {
        square.style.transform = "scale(1)";
        square.style.borderColor = "transparent";
        square.style.borderWidth = "0px";
        square.style.borderStyle = "none";
        square.style.opacity = 1;
      });
    });
  }
  
  fields() {
    let subjects = ["Data science", "Web development", "Mobile development"]
    var idx = 0;
    const subject = document.getElementById("subject");
    // subject.textContent = subjects[idx];
    
    function updateText() {
      if (idx >= subjects.length) {
        idx = 0;
      }
      subject.textContent = subjects[idx];
      subject.dataset.subject = subjects[idx];
      idx++
    }
    
    subject.onanimationiteration = updateText;
    
  }
}