//Contains imported data for colony minerals?
import { getColonyMinerals } from "./database.js";




export const colonyMinerals = getColonyMinerals()

export const ColonyMinerals = () => {
    let html = `<ul>`


    // Use .map() for converting objects to <li> elements
    //  the .map() method iterates the array and invokes teh function you define
    const listItems = colonyMinerals.map(
        (colonymineral) => {
        return `
            <li id="${colonymineral.id}">${colonymineral.}</li>
        `
    })
// going to need an if statement ^^
    html += listItems.join("")
    html += `</ul>`

    return html
}
