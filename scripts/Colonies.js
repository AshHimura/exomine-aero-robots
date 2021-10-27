//Responsible for displaying minerals held by each colony when respective governor is selected from drop list 

import { getGovernors, getColonies, getColonyMinerals } from "./database.js"

const governors = getGovernors()
const colonies = getColonies()
const colonyMinerals = getColoniesMinerals()

export const colonyMineral = () => {
    let colMinHTML = ""
    colMinHTML = "<ul>"
    
    return `<h2>Colony Minerals</h2>
        <select id="colony">
            <option value="0"></option>
            ${
                paintColors.map(
                    (paint) => {
                        return `<option value="${paint.id}">${paint.colorOption}</option>`
                    }
                ).join("")
            }
        </select>
    `
}
