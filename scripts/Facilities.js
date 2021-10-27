//Facility data to be selected depending on active status, possibly handles drop list event

import { getFacilities } from "./database.js"

export const Facilities = getFacilities()

/* document.addEventListener(
    "change",
    (event) => {
        if (event.target.id) {
            
        }
    }
) */


export const facilityChoice = () => {
    let html = `<select id='facilityChoices' disabled="true" name="facilityChoices">
    <label for='facility__Choices'> Choose your facility:</label>`


    // Use .map() for converting objects to <li> elements
    //  the .map() method iterates the array and invokes teh function you define
    const listItems = Facilities.map(facility => {
        return `
            <option value="${facility.id}">${facility.name}</option>
        `
    })

    html += listItems.join("")
    html += "</select>"

    return html
}