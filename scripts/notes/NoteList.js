import {getNotes, useNotes} from "./NoteProvider.js"
import {NoteHTMLConverter} from "./noteHTMLConverter.js"
import {useCriminals, getCriminals} from "../criminals/criminalsDataProvider.js"

const contentTarget=document.querySelector(".notesList")
const eventHub=document.querySelector(".container")

eventHub.addEventListener("showButtonClicked",customEvent=>{
    NoteList()
})
export const NoteList=()=>{
    getNotes()
    .then(getCriminals)
    .then(()=>{
        const criminalArray=useCriminals()
        const notesArray=useNotes()
        render(notesArray,criminalArray)
    })
}

const render =(noteArray, criminalArray)=>{
    const notesStringArray=noteArray.map((currentNote)=>{
        const correctCriminal=criminalArray.find(criminal=>criminal.id===currentNote.criminalId)
        console.log(currentNote)
        console.log(correctCriminal)
            return NoteHTMLConverter(currentNote, correctCriminal)
        }
    ).join("")
    contentTarget.innerHTML=notesStringArray
}