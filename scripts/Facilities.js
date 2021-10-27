//Facility data to be selected depending on active status, possibly handles drop list eventexport const wheelsFunction = () => {
//     let html = `<h2>Facility</h2>`

//     html += `<select id="facility">`
//     html += `<option value="0">Choose a Facility</option>`

//     // Use .map() for converting objects to <li> elements
//     // .map() iterates the array and invokes function (wheels)
//     // Wheels function is argument that .map method will accept 
//     // iterates array - takes object at current location - pass it as arg to function
//     // function defines size parameter - object goes into function - string returned into new array


//     const listItemsArray = facility.map(
//         (facilities) => {
//             return `
//         <option value ="${facilities.id}">${facilities.name}</option>`

//         }
// )

//     // Join all of the strings in the array into a single string
//     html += listItemsArray.join("")
//     html += "</select>"
 
//     return html

// }