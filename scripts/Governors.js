
//Importing governor data from database, pairs to respective colony and/or handles active status eventdocument.addEventListener(

import { findColony } from "./Colonies.js";
import { getColonies, getGovernors, getTransientState, setGovernor } from "./database.js";




export const Governors = getGovernors()
export const colonies = getColonies()






//a change event listener that invokes the SetGovernors function - 

document.addEventListener(
"change",
    (event) => {
        if (event.target.id === "governorChoices") {
           

            setGovernor(parseInt(event.target.value))
           


            }
            

        }
    
)

export const findGovernorColonyId = (governorId) => {
     
    for (const governor of Governors) {
        if (governorId === governor.id) {
            return governor.colonyId
           
        }
    }
}



export const governorChoice = () => {
    const choice = getTransientState()
    let html = `<select id='governorChoices'>
    <label for='governor__Choices'> Choose your governor:</label>
    
    <option value="0">please select governor</option>`


    // Use .map() for converting objects to <li> elements
    //  the .map() method iterates the array and invokes teh function you define
    const listItems = Governors.map(governor => {
        // const selected = governor.id === choice.governorId? "selected":""
        let selected = ""
        if (governor.id === choice.governorId){
            selected = "selected"
        }
        return `
            <option ${selected} value="${governor.id}">${governor.name}</option>
        `
    })

    html += listItems.join("")
    html += "</select>"

    return html
}


