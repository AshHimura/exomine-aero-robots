//Enables mineral purchase button event and exports html to be displayed
import {governorChoice} from "./Governors.js"
import { colonyMineral } from "./Colonies.js"
import { facilityChoice } from "./Facilities.js"


export const Exomine = () => {
    return `
        <h1>Solar System Mining Marketplace</h1>

        <article class="choices">
            <section class="choices__governor options">
                <h2>Choose a governor</h2>
                ${governorChoice()}
            </section>
            <section class="choices__facility options">
                <h2>Facility</h2>
                ${facilityChoice()}
            </section>
            <section class="choices__colonies options">
            <h2>Colonies.temp</h2>
            ${colonyMineral()}
            </section>
           </article>

       
    `
}
