export function intersection() {
  const callback = (entries, observer) => {
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
        console.log(entry.target)
      }
    });
  };

  const options = {
    root: document.querySelector("main"),
    rootMargin: "0px",
    threshold: 0.5,
  };

  const observer = new IntersectionObserver(callback, options);

  const target = document.querySelector(".project-section");
  
  observer.observe(target);
}