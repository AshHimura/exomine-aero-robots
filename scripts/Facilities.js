//Facility data to be selected depending on active status, possibly handles drop list event

import { getFacilities, getTransientState, setFacility } from "./database.js"

export const Facilities = getFacilities()

document.addEventListener(
    "change",
        (event) => {
            if (event.target.id === "facilityChoices") {
               
    
                setFacility(parseInt(event.target.value))
               
    
    
                }
                
    
            }
        
    )


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
    <label for='facility__Choices'> Choose your facility:</label>
    <option value="0">please select facility</option>`
   
    
    const listItems = Facilities.map(facility => {
        let selected = ""
        if (facility.id === facilchoice.facilityId) {
            selected = "selected"
        }
        return `
            <option ${selected} value="${facility.id}">${facility.name}</option>
        `
    })

    html += listItems.join("")
    html += "</select>"

    return html
}