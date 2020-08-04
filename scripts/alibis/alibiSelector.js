import {getCriminals, useCriminals} from "../criminals/criminalsDataProvider.js"
import { alibiHTML } from "./alibiHTML.js"

//get a reference to the DOM elements that will hold the alibi
const contentTarget=document.querySelector(".criminalsContainer")
const target=document.querySelector(".alibiContainer")
//event listener looking for a click
contentTarget.addEventListener("click",(boxClicked)=>{
    //get the criminals from the api
    getCriminals()
    .then(()=>{const criminalList=useCriminals()
        //finding the criminal that matches the parsedInt 
        const matchingCriminal = criminalList.filter((currentCriminal)=>{
            const targetId=parseInt(boxClicked.target.id)
            return targetId===currentCriminal.id
        })
        const content=alibiHTML(matchingCriminal[0])
        target.innerHTML+=content
    })
})