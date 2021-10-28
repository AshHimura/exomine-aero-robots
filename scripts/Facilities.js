//Facility data to be selected depending on active status, possibly handles drop list event

import { getFacilities, getTransientState } from "./database.js"

export const Facilities = getFacilities()

/* document.addEventListener(
    "change",
    (event) => {
        if (event.target.id) {
            
        }
    }
) */


export const facilityChoice = () => {
    
    const facilchoice = getTransientState()

    let disattribute;


    
    if (facilchoice.governorId) {
       disattribute = ""
        // if user has chose governor, than facility choices should not be disabled (enabled)
    } else {
        disattribute = "disabled"
    }
    let html = `<select ${disattribute} id='facilityChoices' name="facilityChoices">
    <label for='facility__Choices'> Choose your facility:</label>`
   
    
    const listItems = Facilities.map(facility => {
        return `
            <option value="${facility.id}">${facility.name}</option>
        `
    })

    html += listItems.join("")
    html += "</select>"

    return html
}