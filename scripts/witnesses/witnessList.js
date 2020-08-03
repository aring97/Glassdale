import {getWitnesses, useWitnesses} from "./witnessesDataProvider.js"
import {witnessesHTML} from "./witnessesHTML.js"

const contentTarget=document.querySelector(".criminalsContainer")
const eventHub=document.querySelector(".container")

eventHub.addEventListener("witnessButtonClicked",event=>{
    witnessList()
})

const witnessList=()=>{
    getWitnesses()
    .then(()=>{
        const witnessArray=useWitnesses()
        render(witnessArray)
    })
}

const render=(witnessArray)=>{
    const witnessStringArray=witnessArray.map(
        (currentWitness)=>{
            return witnessesHTML(currentWitness)
        }
    ).join("")
    contentTarget.innerHTML=witnessStringArray
}