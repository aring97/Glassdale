let witnesses=[]

export const useWitnesses=()=>{
    return witnesses.slice()
}

export const getWitnesses=()=>{
    return fetch("https://criminals.glassdale.us/witnesses")
    .then(resp=>resp.json())
    .then(parseWitnesses=>{witnesses=parseWitnesses})
}