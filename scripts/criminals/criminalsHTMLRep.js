export const criminalsHTML=(criminalObj)=>{
    return `
    <section class="criminal--card">
    <h3>${criminalObj.name}</h3>
    <p>Age: ${criminalObj.age}</p>
    <p>Crime: ${criminalObj.conviction}</p>
    <p>Term start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</P>
    <p>Term end: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</P>
    <button id=${criminalObj.id}>Associate Alibis</button>
    </section>
    `
}