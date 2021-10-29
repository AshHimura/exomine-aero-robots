//Minerals held by each respective facility? handles subtraction of mineral stock when puchase button event occurs.

import { getFacilities, getTransientState, getMinerals, getMineralFacilities } from "./database.js"

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

export const FacilityMinerals = () => {
    
    const choice = getTransientState()
    const minerals = getMinerals()
    const facility = getFacilities()
    const facilityMin = getMineralFacilities()
    

    if (choice.facilityId) {
        

        const foundfacility = facility.find(
            (facility) => {
                return choice.facilityId === facility.id
            }
        )

        // const foundColony = colonies.find(
        //     (colony) => {
        //         return colony.id === foundGovernor.colonyId 
        //     }
        // )

        const foundfacilityminArray = facilityMin.filter(
            (facility) => {
                return facility.facilityId === foundfacility.id
            }
        )
        
        let html = ""
  

        // const foundMinerals = minerals.filter(
        //     (mineral) => {
                for (const foundfacilmin of foundfacilityminArray) {
                    let checked = ""
                    if (foundfacilmin.id === choice.mineralId) {
                        checked = "checked"
                    } else {
                        checked = ""
                    }
                    const foundMineral = minerals.find(
                        (mineral) => {
                            return mineral.id === foundfacilmin.mineralId
                        }
                    )
                    html += `<section>
                    <input type="radio" name="minerals" ${checked}
                    value="${foundfacilmin.mineralId}" id="${foundfacilmin.id}" /> ${foundfacilmin.quantity} tons of ${foundMineral.name}</section>`
                }
            
        

        
        return html
    } else {
        return `<section>No Minerals found in colony</section>`
    }
 
   

//  const filter governor.colonyid === colony.id




// going to need an if statement ^^
   


}
