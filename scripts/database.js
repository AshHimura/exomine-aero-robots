const database = {
    governors: [
        {
            id: 1, 
            name: "Kathryn Janeway", 
            colonyId: 1,
            active: true
        }, 
        {
            id: 2, 
            name: "Nyota Uhura", 
            colonyId: 2,
            active: true
        }, 
        {
            id: 3, 
            name: "Leia Organa", 
            colonyId: 2,
            active: false
        }, 
        {
            id: 4, 
            name: "Carolyn Fry", 
            colonyId: 2,
            active: false
        }, 
        {
            id: 5, 
            name: "Ruby Rhod", 
            colonyId: 3,
            active: true
        }, 
        {
            id: 6, 
            name: "Turanga Leela", 
            colonyId: 4,
            active: true
        }, 
        {
            id: 7, 
            name: "Laurel Weaver", 
            colonyId: 5,
            active: false
        }, 
        {
            id: 8, 
            name: "Ellen Ripley", 
            colonyId: 6,
            active: true
        }, 
        {
            id: 9, 
            name: "Amy Pond", 
            colonyId: 7,
            active: true
        }, 
        {
            id: 10, 
            name: "River Song", 
            colonyId: 7,
            active: true
        }, 
    ], 
    colonies: [
        {
            id: 1,
            name: "Minerva"
        },
        {
            id: 2, 
            name: "Terra"
        },
        {
            id: 3, 
            name: "Sol"
        },
        {
            id: 4, 
            name: "Diana"
        },
        {
            id: 5,
            name: "Aurora"
        },
        {
            id: 6,
            name: "Victoria"
        },
        {
            id: 7,
            name: "Luna"
        }
    ],
    minerals: [
        {
            id: 1, 
            name: "Gold"
        },
        {
            id: 2, 
            name: "Pumice"
        },
        {
            id: 3,
            name: "Talc"
        },
        {
            id: 4,
            name: "Iron"
        },
        {
            id: 5,
            name: "Barite"
        },
        {
            id: 6,
            name: "Gypsum"
        },
        {
            id: 7,
            name: "Silica"
        },
        {
            id: 8,
            name: "Kaolin"
        },
        {
            id: 9,
            name: "Potash"
        },
        {
            id: 10,
            name: "Sodium"
        },
        {
            id: 11,
            name: "Magnesium"
        },
        {
            id: 12,
            name: "Potassium"
        },
        {
            id: 13,
            name: "Copper"
        },
        {
            id: 14,
            name: "Zinc"
        }
    ], 
    facilities: [
        {
            id: 1,
            name: "Broglio",
            active: true
        },
        {
            id: 2, 
            name: "Naro",
            active: true
        },
        {
            id: 3,
            name: "Liege",
            active: true
        },
        {
            id: 4,
            name: "Vikram",
            active: true
        },
        {
            id: 5,
            name: "Toulouse",
            active: true
        },
        {
            id: 6,
            name: "Esrange",
            active: true
        },
        {
            id: 7,
            name: "Kennedy", 
            active: true
        },

    ], 
    mineralFacilities: [
        {
            id: 1,
            facilityId: 1,
            mineralId: 1,
            quantity: 16
        },
        {
            id: 1,
            facilityId: 1,
            mineralId: 2,
            quantity: 1
        },
        {
            id: 1,
            facilityId: 1,
            mineralId: 3,
            quantity: 8
        },
        {
            id: 2,
            facilityId: 2,
            mineralId: 4,
            quantity: 7
        },
        {
            id: 2,
            facilityId: 2,
            mineralId: 5,
            quantity: 23
        },
        {
            id: 3,
            facilityId: 3,
            mineralId: 6,
            quantity: 8
        },
        {
            id: 4,
            facilityId: 4,
            mineralId: 7,
            quantity: 1
        },
        {
            id: 4,
            facilityId: 4,
            mineralId: 8,
            quantity: 1
        },
        {
            id: 5,
            facilityId: 5,
            mineralId: 9,
            quantity: 0
        },
        {
            id: 5,
            facilityId: 5,
            mineralId: 10,
            quantity: 1
        },
        {
            id: 6,
            facilityId: 6,
            mineralId: 11,
            quantity: 12
        },
        {
            id: 6,
            facilityId: 6,
            mineralId: 3,
            quantity: 4
        },
        {
            id: 7,
            facilityId: 7,
            mineralId: 12,
            quantity: 7
        },
        {
            id: 7,
            facilityId: 7,
            mineralId: 13,
            quantity: 4
        },
        {
            id: 7,
            facilityId: 7,
            mineralId: 14,
            quantity: 2
        },

    ], 
    colonyMinerals: [
        {
            id: 1,
            colonyId: 3,
            mineralId: 12,
            quantity: 1
        },
        {
            id: 2,
            colonyId: 7,
            mineralId: 14,
            quantity: 12
        },
        {
            id: 3,
            colonyId: 2,
            mineralId: 1,
            quantity: 16
        },
        {
            id: 4,
            colonyId: 7,
            mineralId: 5,
            quantity: 2
        },
        {
            id: 5,
            colonyId: 7,
            mineralId: 9,
            quantity: 3
        }
    ],

    transientState: {}
}

export const setFacility = (facilityId) => {
    database.transientState.selectedFacility = facilityId
    document.dispatchEvent( new CustomEvent("stateChanged") )
}
// export functions - for use in other modules
export const getFacilities = () => {
    return database.facilities.map(facility => ({...facility}))
}
export const getGovenors = () => {
    return database.govenors.map(governor => ({...governor}))
}
export const getColonies = () => {
    return database.colonies.map(colony => ({...colony}))
}
export const getMinerals = () => {
    return database.minerals.map(mineral => ({...mineral}))
}
export const getMineralFacilities = () => {
    return database.mineralFacilities.map(mineralFacility => ({...mineralFacility}))
}
export const getColonyMinerals = () => {
    return database.colonyMinerals.map(colonyMineral => ({...colonyMineral}))
}




export const purchaseMineral = () => {

        // Broadcast custom event to entire documement so that the
        // application can re-render and update state
        document.dispatchEvent( new CustomEvent("stateChanged") )
    }
}
