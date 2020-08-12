import {saveNote} from "./NoteProvider.js"
import {useCriminals, getCriminals} from "../criminals/criminalsDataProvider.js"
const contentTarget = document.querySelector(".noteFormContainer")
const eventHub= document.querySelector(".container")
// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        // Make a new object representation of a note
        let criminalId=document.querySelector("#noteForm--criminal").value.split("--")[1]
        const noteAuthor=document.querySelector("#noteForm--author").value
        const noteContent=document.querySelector("#noteForm--text").value
        criminalId=parseInt(criminalId)
        console.log(criminalId)
        const newNote = {
            criminalId:criminalId,
            author:noteAuthor,
            content:noteContent,
            date:Date.now()
            // Key/value pairs here
        }
        // Change API state and application state
        saveNote(newNote)
    }
})

const render = () => {
    getCriminals().then(()=>{
    const criminalcollection=useCriminals()
    contentTarget.innerHTML = `
        <select id ="noteForm--criminal" class="criminalSelect">
        <option value="criminal--0">Please select a criminal...</option>
        ${
            criminalcollection.map(criminalObj=>{
                return `<option value="criminal--${criminalObj.id}">${criminalObj.name}</option>`
            })
        }
        </select>
        <input type="text" id="noteForm--author" placeholder="officer name" />
        <textarea id="noteForm--text" placeholder="Enter note here"></textarea>
        <button id="saveNote">Save Note</button>
    `})
}

export const NoteForm = () => {
    render()
}