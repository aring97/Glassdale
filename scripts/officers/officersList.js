import {useOfficers, getOfficers} from "./officersDataProvider.js"
import {officersHTML} from "./officersHTMLReps.js"

const target=document.querySelector(".officersContainer")
export const officersList=()=>{
    getOfficers()
    .then(()=>{
        const officersArray=useOfficers()
        let officersHTMLRepresentation=""
        officersArray.forEach(officer=>{
            officersHTMLRepresentation+=officersHTML(officer)
        })
        target.innerHTML+=officersHTMLRepresentation
    })
}