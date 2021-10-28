//Contains imported data for colony minerals?
import { getColonyMinerals, getGovernors } from "./database.js";




export const colonyMinerals = getColonyMinerals()


export const ColonyMinerals = () => {
    let governor = getGovernors()
    let html = `<ul>`


    const listItems = colonyMinerals.map(
        (colonymineral) => {
        return `
            <li id="${colonymineral.id}">${mineral.id}</li>
        `

    })

//  const filter governor.colonyid === colony.id




// going to need an if statement ^^
    html += listItems.join("")
    html += `</ul>`

    return html
}
