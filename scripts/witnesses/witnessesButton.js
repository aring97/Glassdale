const contentTarget=document.querySelector(".showWitnessesButton")
const eventHub=document.querySelector(".container")

eventHub.addEventListener("click",event=>{
    if(event.target.id==="witnessButton"){
        const customEvent=new CustomEvent("witnessButtonClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

export const showWitnessButton=()=>{
    contentTarget.innerHTML=`<button id=witnessButton> Show witnesses</button>`
}