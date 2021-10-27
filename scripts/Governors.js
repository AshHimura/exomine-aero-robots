//Importing governor data from database, pairs to respective colony and/or handles active status eventdocument.addEventListener(
import { setGovernors } from "./database.js"




// a change event listener that invokes the SetGovernors function - 
// "change",
//     (event) => {
//         if (event.target.name === "governor") {
//             setGovernors(parseInt(event.target.value))
//         }
//     }
// )


export const governorChoice = () => {
    let html = "<select id="governor__choices">"

    // Use .map() for converting objects to <li> elements
    //  the .map() method iterates the array and invokes teh function you define
    const listItems = governor.map(governor=> {
        return `
            <option value="${governor.id}">${governor.name}</option>
        `
    })

    html += listItems.join("")
    html += "</select>"

    return html
}
