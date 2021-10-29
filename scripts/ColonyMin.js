//Contains imported data for colony minerals?
import { getColonyMinerals, getColonies, getGovernors, getMinerals, getTransientState } from "./database.js";





export const ColonyMinerals = () => {
    
    const choice = getTransientState()
    const colonies = getColonies()
    const colonyMinerals = getColonyMinerals()
    const minerals = getMinerals()
    const governors = getGovernors()
    

    if (choice.governorId) {
        

        const foundGovernor = governors.find(
            (governor) => {
                return choice.governorId === governor.id
            }
        )

        const foundColony = colonies.find(
            (colony) => {
                return colony.id === foundGovernor.colonyId 
            }
        )

        const foundColonyMin = colonyMinerals.find(
            (colonyMineral) => {
                return colonyMineral.colonyId === foundColony.id
            }
        )

        const foundMinerals = minerals.find(
            (mineral) => {
                return mineral.id === foundColonyMin.mineralId
            }
        )    

        let html = `<section>${foundMinerals.name}</section>`

        return html
    } else {
        return `<section>No Minerals found in colony</section>`
    }
 
   

//  const filter governor.colonyid === colony.id




// going to need an if statement ^^
   
}