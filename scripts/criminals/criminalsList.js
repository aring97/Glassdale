import {useCriminals, getCriminals} from "./criminalsDataProvider.js"
import {criminalsHTML} from "./criminalsHTMLRep.js"

const target=document.querySelector(".criminalContainer")
export const criminalList=()=>{
    getCriminals()
    .then(()=>{
        const criminalArray=useCriminals()
        let criminalsHTMLRepresentation=""
        criminalArray.forEach(criminal=>{
            criminalsHTMLRepresentation+=criminalsHTML(criminal)
        })
        target.innerHTML=criminalsHTMLRepresentation
    })
}