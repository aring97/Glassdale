import {getCriminals, useCriminals} from "../criminals/criminalsDataProvider.js"
import { alibiHTML } from "./alibiHTML.js"

//get a reference to the DOM elements that will hold the alibi button
const contentTarget=document.querySelector(".criminalsContainer")
const target=document.querySelector(".alibiContainer")
//const target=document.querySelector(".criminalContainer")
contentTarget.addEventListener("click",(boxClicked)=>{
    getCriminals()
    .then(()=>{const criminalList=useCriminals()
        const matchingCriminal = criminalList.filter((currentCriminal)=>{
            const targetId=parseInt(boxClicked.target.id)
            return targetId===currentCriminal.id
        })
        const content=alibiHTML(matchingCriminal[0])
        target.innerHTML+=content
    })
})