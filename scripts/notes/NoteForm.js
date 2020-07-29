import {saveNote} from "./NoteProvider.js"
const contentTarget = document.querySelector(".noteFormContainer")
const eventHub= document.querySelector(".container")
// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {
        debugger
        // Make a new object representation of a note
        const noteSuspect=document.querySelector("#noteForm--suspect")
        const noteAuthor=document.querySelector("#noteForm--author")
        const noteContent=document.querySelector("#noteForm--text")
        const newNote = {
            suspectName:noteSuspect.value,
            author:noteAuthor.value,
            content:noteContent.value,
            date:Date.now()
            // Key/value pairs here
        }
        // Change API state and application state
        saveNote(newNote)
    }
})

const render = () => {
    contentTarget.innerHTML = `
        <input type="text" id="noteForm--suspect" placeholder="suspect name" />
        <input type="text" id="noteForm--author" placeholder="officer name" />
        <textarea id="noteForm--text" placeholder="Enter note here"></textarea>
        <button id="saveNote">Save Note</button>
    `
}

export const NoteForm = () => {
    render()
}