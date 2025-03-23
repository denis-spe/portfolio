import { handleIntroData } from './introductionData.js'
import { handleProjectData } from './projectData.js';

function fetchData(jsonFile, dataHandler) {
  fetch(jsonFile)
    .then(reponse => reponse.json())
    .then(data => {
      dataHandler(data)
    })
}

export function dataPreprocessing() {
  fetchData(
    "data.json", data => {
      handleIntroData(data);
      data["projects"].forEach(it => {
        handleProjectData(
          it["title"],
          it["imgPath"],
          it["durationLink"],
          it["description"],
          it["iconsPath"]
        )
      });
    })
}