import { getColonies, getGovernors, getTransientState } from "./database.js"

//Responsible for displaying minerals held by each colony when respective governor is selected from drop list 
export const colonies = getColonies()


export const colonynameHTML = () => {
    const choice = getTransientState()
    
    if (choice.governorId) {
        
        const governors = getGovernors()

        //Iterating through governors array to compare transient state governors id to return entire governor object
        const foundGovernor = governors.find(
            (governor) => {
                return choice.governorId === governor.id
            }
        )
    
        //Iterating through the colonies to return entire colony object,
        //comparing colony.id to the foundGovernor.colonyId
        const foundColony = colonies.find (
            (colony) => {
                
                return colony.id === foundGovernor.colonyId

            }
        )
        
    
        let html = `<h2>${foundColony.name}</h2>`
    
        return html
    } else {
        return `<h2>No Resources Available</h2>`
    }
}

