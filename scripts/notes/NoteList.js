import {getNotes, useNotes} from "./NoteProvider.js"
import {NoteHTMLConverter} from "./noteHTMLConverter.js"

const contentTarget=document.querySelector(".notesList")
const eventHub=document.querySelector(".container")

eventHub.addEventListener("showButtonClicked",customEvent=>{
    NoteList()
})
export const NoteList=()=>{
    getNotes().then(()=>{
        const notesArray=useNotes()
        render(notesArray)
    })
}

const render =(noteArray)=>{
    const notesStringArray=noteArray.map(
        (currentNote)=>{
            return NoteHTMLConverter(currentNote)
        }
    ).join("")
    contentTarget.innerHTML=notesStringArray
}