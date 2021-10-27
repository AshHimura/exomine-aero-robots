//Responsible for displaying minerals held by each colony when respective governor is selected from drop list 

import { getGovernors, getColonies } from "./database.js"

//const governors = getGovernors()
const colonies = getColonies()
//const colonyMinerals = getColoniesMinerals()

export const colonyMineral = () => {
    let colMinHTML = ""
    colMinHTML = "<ul>"
    
    return `<h2 name=Colony Minerals select id="colony"></h2>
            <option value="0"></option>
            ${
                colonies.map(
                    (colony) => {
                        return `<option value="${colony.id}">${colony.name}</option>`
                    }
                ).join("")
            }
        </select>
    `
}
 

