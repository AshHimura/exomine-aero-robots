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

        const foundColonyMinArray = colonyMinerals.filter(
            (colonyMineral) => {
                return colonyMineral.colonyId === foundColony.id
            }
        )
        
        let html = ""
  

        // const foundMinerals = minerals.filter(
        //     (mineral) => {
                for (const foundColonyMin of foundColonyMinArray) {
                    
                    const foundMineral = minerals.find(
                        (mineral) => {
                            return mineral.id === foundColonyMin.mineralId
                        }
                    )
                    html += `<section>${foundColonyMin.quantity} ${foundMineral.name}</section>`
                }
            
        


        return html
    } else {
        return `<section>No Minerals found in colony</section>`
    }
 
   

//  const filter governor.colonyid === colony.id




// going to need an if statement ^^
   
}