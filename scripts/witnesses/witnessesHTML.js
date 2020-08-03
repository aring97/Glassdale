export const witnessesHTML=(witnessObj)=>{
    return `
    <section class="witness--card">
    <h3>${witnessObj.name}</h3>
    <p>${witnessObj.statements}
    </section>
    `
}