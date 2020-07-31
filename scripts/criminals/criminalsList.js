import {useCriminals, getCriminals} from "./criminalsDataProvider.js"
import {criminalsHTML} from "./criminalsHTMLRep.js"

const target=document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

// Listen for the custom event you dispatched in ConvictionSelect
eventHub.addEventListener("crimeChosen", event => {
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
eventHub.addEventListener("officerSelected", event => {
    // How can you access the officer name that was selected by the user?
    const officerName = event.detail.officer

    // How can you get the criminals that were arrested by that officer?
    const criminals = useCriminals()
    console.log(officerName)
    const filteredcriminals=criminals.filter(
        criminalObject => {
            if (criminalObject.arrestingOfficer === officerName) {
                return true
            }
        }
    )
    render(filteredcriminals)
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