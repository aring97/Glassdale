export const alibiHTML=(criminalObj)=>{
    let criminalalibiHTML=`<section class="alibi--card">
    <h3>${criminalObj.name}</h3>
    <p>Age: ${criminalObj.age}</p>
    <p>Crime: ${criminalObj.conviction}</p>
    <p>Term start: ${new Date(criminalObj.incarceration.start).toLocaleDateString('en-US')}</P>
    <p>Term end: ${new Date(criminalObj.incarceration.end).toLocaleDateString('en-US')}</P>
    `
    let added=""
    criminalObj.known_associates.forEach(associateObj=> {
         added+=`
        <p class="name">name: ${associateObj.name}</p>
        <p class="alibi">alibi: ${associateObj.alibi}</p>
        <hr />
        `
    });
    criminalalibiHTML+=added;
    criminalalibiHTML+=`</section>`
    return criminalalibiHTML
}