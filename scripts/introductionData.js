export function handleIntroData(data) {
  const introData = data["introduction"]
  const contactBrand = document.querySelector(".contact-brand")
  
  for (var path of introData["contact-brand"]){
    const name = path.split("/").pop().split(".")[0]
    const div = document.createElement("div");
    div.className = name + "-icon"
    
    const img = document.createElement('img');
    img.src = path
    img.alt = name
    img.width = "25"
    
    div.append(img)
    contactBrand.appendChild(div)
  }
}