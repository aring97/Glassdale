import {useOfficers, getOfficers} from "./officersDataProvider.js"

const contentTarget = document.querySelector(".filters__crime")
const eventHub=document.querySelector(".container")

export const OfficerSelect = () => {
    // Get all convictions from application state
    getOfficers()
    .then(()=>{
        const officers = useOfficers()
        render(officers)
    }
    )

    const render = officersCollection => {
        /*
            Use interpolation here to invoke the map() method on
            the convictionsCollection to generate the option elements.
            Look back at the example provided above.
        */
        contentTarget.innerHTML += `
            <select class="dropdown" id="officerSelect">
                <option value="0">Please select an officer...</option>
                ${
                    officersCollection.map(officerObj=>{
                        return `<option>${officerObj.name}</option>`;
                    }).join("")
                }                
            </select>
        `
    }

}

eventHub.addEventListener("change", changeEvent => {
    if (changeEvent.target.id === "officerSelect") {
        // Define a custom event
        const customEvent = new CustomEvent("officerSelected", {
            detail: {
                officer: changeEvent.target.value
            }
        })

        // Dispatch event to event hub
        eventHub.dispatchEvent(customEvent)
    }
})