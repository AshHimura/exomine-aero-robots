//purchase event, adds mineral to respective colony. Maybe activates a window alert upon purchase?

import { getFacilities, getMinerals, getTransientState, setMineral } from "./database.js"

document.addEventListener(
    "change",
        (event) => {
            if (event.target.name === "minerals") {
                
                setMineral(parseInt(event.target.id))
                
                
    
    
                }
                
    
            }
        
    )



export const cartHTML = ()  => {
    const choice = getTransientState()
    const minerals = getMinerals()
    const facilities = getFacilities()
    if (choice.mineralId) {
        
        const findMineralObj = minerals.find(
            (mineral) => {
                return choice.mineralId === mineral.id
            }
        )
        const findFacility = facilities.find(
            (facility) => {
                return choice.facilityId === facility.id
            }
            )
            let html = `You have chosen ${findMineralObj.name} from ${findFacility.name}`
            return html
    } else {
        return ``
    }

}
