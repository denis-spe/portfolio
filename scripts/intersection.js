let text

const innerObserverCallback = (entries, observer) => {
  entries.forEach((entry) => {
    /*entry.target.classList.add("inner-pro-container-hide")*/
    
    if (entry.isIntersecting) {
      if (entry.intersectionRatio >= 0.4) {
        entry.target.classList.add("inner-pro-container-display")
      }
    }
    
    else {
      entry.target.classList.remove("inner-pro-container-display")
      entry.target.classList.add("inner-pro-container-hide")
    }
  })
}

function proContents() {
  const outerOption = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1
  }
  const outerObserver = new IntersectionObserver(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 0.4,
    };
    
    const targets = document.querySelectorAll(".inner-pro-container")
    
    const observer = new IntersectionObserver(innerObserverCallback, options);
    
    targets.forEach(it => observer.observe(it))
  }, outerOption)
  
  outerObserver.observe(document.querySelector("#project-section"))
}

function proIntersection(entry, seperator, subTile) {
  if (entry.isIntersecting) {
    text = "Project"
    const proH2 = document.querySelector(".pro-title-container h2")
    proH2.classList.remove("show")
    proH2.classList.add("hide")
    
    seperator.classList.remove("hide")
    seperator.classList.add("show")
    
    subTile.classList.remove("hide")
    subTile.classList.add("show")
  }
  else {
    const proH2 = document.querySelector(".pro-title-container h2")
    proH2.classList.remove("hide")
    proH2.classList.add("show")
    
    seperator.classList.remove("show")
    seperator.classList.add("hide")
    
    subTile.classList.remove("show")
    subTile.classList.add("hide")
  }
}

export function intersection() {
  const callback = (entries, observer) => {
    const seperator = document.getElementById("title-seperator");
    const subTile = document.getElementById("sub-title");
    
    let proTitle
    
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
      
      proIntersection(
        entry,
        seperator,
        subTile
      )
    });
    subTile.textContent = text
  };
  
  const options = {
    root: null,
    rootMargin: "20px",
    threshold: 1.0,
  };
  
  const observer = new IntersectionObserver(callback, options);
  
  const target = document.querySelector("#project-section");
  
  observer.observe(target)
  
  proContents()
}