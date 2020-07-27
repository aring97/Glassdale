let officers=[]

export const useOfficers=()=>{
    return officers.slice()
}
export const getOfficers=()=>{
    return fetch("https://criminals.glassdale.us/officers")
    .then(resp=>resp.json())
    .then(parseOfficers=>{officers=parseOfficers})
}