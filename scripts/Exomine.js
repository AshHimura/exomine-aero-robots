//Enables mineral purchase button event and exports html to be displayedimport { DiamondSizes } from "./DiamondSizes.js"




export const Exomine = () => {
    return `
        <h1Solar System Mining Marketplace</h1>

        <article class="choices">
            <section class="choices__governor options">
                <h2>Choose a governor</h2>
                ${governorChoice()}
            </section>
            <section class="choices__facility options">
                <h2>Facility</h2>
                
            </section>
           </article>

       
    `
}
