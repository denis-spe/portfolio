export function intersection() {
  const callback = (entries, observer) => {
    const seperator = document.getElementById("title-seperator");
    const subTile = document.getElementById("sub-title");
    
    let proTitle
    let display = ""
    let text = ""
    let displayProTitle = ""
    
    entries.forEach((entry) => {
      // Each entry describes an intersection change for one observed
      // target element:
      //   entry.boundingClientRect
      //   entry.intersectionRatio
      //   entry.intersectionRect
      //   entry.isIntersecting
      //   entry.rootBounds
      //   entry.target
      //   entry.time
      if (entry.isIntersecting) {
        display = "display: inline;"
        text = "Project"
        displayProTitle = "none"
        document.querySelector(".pro-title-container h2").style.opacity = 0
      }
      else {
        document.querySelector(".pro-title-container h2").style.opacity = 1
      }
    });
    
    seperator.style = display
    subTile.textContent = text
    subTile.style = display
  };

  const options = {
    root: null,
    rootMargin: "20px",
    threshold: 1.0,
  };

  const observer = new IntersectionObserver(callback, options);

  const target = document.querySelector(".project-section");

  observer.observe(target)
}