//Responsible for displaying minerals held by each colony when respective governor is selected from drop list 

import { getGovernors, getColonies } from "./database.js"

//const governors = getGovernors()
const colonies = getColonies()
//const colonyMinerals = getColoniesMinerals()

export const colonyMineral = () => {
    let colMinHTML = "<ul>"
    
    const listItems = colonies.map(
        (colony) => {
            return `<li value="${colony.id}">${colony.name}</li>`
        }
    )

colMinHTML += listItems.join("")

colMinHTML += "</ul>"
return colMinHTML
     
}

export const findColony = (governorId) => {
   let foundColony = 0
    for (colony of colonies) {
        if (governorId === overnor.colonyId) {
            foundColony = colony.id
        } 
    }
    return foundColony
}
 

