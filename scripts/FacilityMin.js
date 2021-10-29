//Minerals held by each respective facility? handles subtraction of mineral stock when puchase button event occurs.

import { getFacilities, getTransientState } from "./database.js"

//Hint: You need to filter the array of facility minerals on the facilityId foreign key as the first step. It should match the id of the facility chosen by the user. Where do you store which facility was chosen by the user?

export const facilityMineralHTML = () => {
    const choice = getTransientState()

    if (choice.facilityId) {

        const facilities = getFacilities()

        const foundFacility = facilities.find(
            (facility) => {
                return choice.facilityId === facility.id 
            }
        )
        
        let html = `<h2>Minerals at ${foundFacility.name} Facility</h2>`

        return html
    } else {
        return `<h2></h2>`
    }



}
