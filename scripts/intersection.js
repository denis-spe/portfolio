// The LORD GOD is holy


let text

const innerObserverCallback = (entries, observer) => {
    entries.forEach((entry) => {
        /*entry.target.classList.add("inner-pro-container-hide")*/

        if (entry.isIntersecting) {
            if (entry.intersectionRatio >= 0.4) {
                entry.target.classList.add("inner-pro-container-display")
            }
        } else {
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

        const targets = document.querySelectorAll(".inner-pro-container, .pro-title-container")

        const observer = new IntersectionObserver(innerObserverCallback, options);

        targets.forEach(it => observer.observe(it))
    }, outerOption)

    outerObserver.observe(document.querySelector("#project-section"))
}

function proIntersection(entry, subTile) {
    if (entry.isIntersecting) {
        text = "project"
        const proH2 = document.querySelector(".pro-title-container h2")
        proH2.classList.remove("show")
        proH2.classList.add("hide")

        subTile.classList.remove("hide")
        subTile.classList.add("show")
        console.log("Hi")
    } else {
        const proH2 = document.querySelector(".pro-title-container h2")
        proH2.classList.remove("hide")
        proH2.classList.add("show")

        subTile.classList.remove("show")
        subTile.classList.add("hide")
        document.querySelector(".header-title-container").style.height = "fit-content"
    }
}

export function arrowIntersection() {
    const callback = (entries, observer) => {

        // Fetch the arrow-contain class
        const arrows = document.querySelectorAll('.arrow-container .arrow-inner-container');

        entries.forEach(entry => {
            arrows.forEach(arrow => {
                if (entry.isIntersecting) {
                    arrow.classList.remove('hide-arrow')
                } else {
                    arrow.classList.add('hide-arrow')

                }
            })
        })
    }

    const options = {
        root: null,
        rootMargin: "50px 0px",
        threshold: 0.9
    }

    const observer = new IntersectionObserver(callback, options);

    const target = document.querySelector("#intro-section");

    observer.observe(target)
}

export function intersection() {
    const callback = (entries, observer) => {
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