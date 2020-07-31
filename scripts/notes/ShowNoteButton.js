const contentTarget=document.querySelector(".showNotesButton")
const eventHub=document.querySelector(".container")

eventHub.addEventListener("click",clickEvent=>{
    if(clickEvent.target.id==="showButton"){
        const customEvent=new CustomEvent("showButtonClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

export const ShowNoteButton=()=>{
    contentTarget.innerHTML=`<button id="showButton">Show Notes</button>`
}