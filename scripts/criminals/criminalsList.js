import {useCriminals, getCriminals} from "./criminalsDataProvider.js"
import {criminalsHTML} from "./criminalsHTMLRep.js"

const target=document.querySelector(".filters__incarceration")
const eventHub = document.querySelector(".container")

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("crimeChosen", event => {
    getCriminals()
        .then(() => {
            const appStateCriminals = useCriminals()
        
        const matchingCriminals = appStateCriminals.filter((currentCriminal)=>{
            return event.detail.crimeThatWasChosen=== currentCriminal.conviction;
        })

        /*
            Then invoke render() and pass the filtered collection as
            an argument
        */
       render(matchingCriminals)
})
})

const render = criminalCollection => {
    let criminalsHTMLRepresentation=""
    criminalCollection.forEach(criminal => {
        criminalsHTMLRepresentation+=criminalsHTML(criminal)
    });
    target.innerHTML=criminalsHTMLRepresentation
}


// Render ALL criminals initally
export const criminalList = () => {
    getCriminals()
        .then(() => {
            const appStateCriminals = useCriminals()
            render(appStateCriminals)
        })
}