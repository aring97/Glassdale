let convictions=[]

export const useConvictions=()=>{
    return convictions.slice()
}
export const getConvictions=()=>{
    return fetch("https://criminals.glassdale.us/crimes")
    .then(resp=>resp.json())
    .then(parseconvictions=>convictions=parseconvictions)
}