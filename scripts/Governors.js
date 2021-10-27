
//Importing governor data from database, pairs to respective colony and/or handles active status eventdocument.addEventListener(

import { getColonies, getGovernors } from "./database.js";
import { facilityChoice } from "./Facilities.js";

export const Governors = getGovernors()

//a change event listener that invokes the SetGovernors function - 

document.addEventListener(
"change",
    (event) => {
        if (event.target.id === "governorChoices") {
            document.getElementById("facilityChoices").disabled = false
        }
    }
)


export const governorChoice = () => {
    let html = `<select id='governorChoices'>
    <label for='governor__Choices'> Choose your governor:</label>`


    // Use .map() for converting objects to <li> elements
    //  the .map() method iterates the array and invokes teh function you define
    const listItems = Governors.map(governor => {
        return `
            <option value="${governor.id}">${governor.name}</option>
        `
    })

    html += listItems.join("")
    html += "</select>"

    return html
}


