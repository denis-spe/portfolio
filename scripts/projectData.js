class ProjectData {
  constructor(
    imgPath,
    title,
    durationLink,
    description,
    iconsPath,
  ) {
    this.imgPath = imgPath
    this.title = title
    this.iconsPath = iconsPath
    this.description = description
    this.durationLink = durationLink
  }

  render(element) {
    const queryElement = document.querySelector(element)

    // Create the a tag.
    const a = document.createElement("a")
    // Add the duration link.
    a.setAttribute("href", this.durationLink)

    // Creating div with inner-pro-container
    const innerProContainer = document.createElement("div")
    innerProContainer.setAttribute(
      "class",
      "inner-pro-container"
    )

    // Creating dl tag. 
    const dl = document.createElement("dl")
    // Create the dd tag.
    const dd = document.createElement("dd")
    dd.innerText = this.description ?? ""
    const iconDd = document.createElement("dd")
    this.iconsPath.forEach(path => {
      const iconImg = document.createElement("img");
      iconImg.src = path
      iconImg.width = "17"
      iconDd.appendChild(iconImg)
    })
    // Creating the dt tag.
    const dt = document.createElement("dt")
    // Create a figure tag
    const figure = document.createElement("figure")
    // Creating img tag.
    const img = document.createElement("img")
    img.setAttribute("src", this.imgPath)
    img.width = "30"
    // Create the figcaption tag.
    const figcaption = document.createElement("figcaption")
    figcaption.innerText = this.title ?? ""

    // Append the img tag to figure.
    figure.appendChild(img)
    // Add figcaption to figure.
    figure.appendChild(figcaption)
    // Add the figure to dt
    dt.appendChild(figure)
    // Add the dl to dt
    dl.appendChild(dt)
    // Add the dd to dl.
    dl.appendChild(dd)
    // Add icon description
    dl.appendChild(iconDd)
    // Add the dl in the inner-pro-container
    innerProContainer.appendChild(dl)
    // Add the inner-pro-container to a tag
    a.appendChild(innerProContainer)
    // Add the a tag to query element.
    queryElement.appendChild(a)
  }
}

export function projectData(
  title,
  imgPath,
  durationLink,
  description,
  iconsPath,
) {
  const data = new ProjectData(
    imgPath,
    title,
    durationLink,
    description,
    iconsPath,
  )
  data.render(".pro-content-container")
}