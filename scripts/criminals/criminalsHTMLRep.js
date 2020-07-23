export const criminalsHTML=(criminalObj)=>{
    return `
    <section class="criminal-card">
    <h3>${criminalObj.name}</h3>
    <p>Age: ${criminalObj.age}</p>
    <p>Crime: ${criminalObj.conviction}</p>
    <p>Term start: ${criminalObj.incarceration.start}</P>
    <p>Term end: ${criminalObj.incarceration.end}</P>
    </section>
    `
}