export const NoteHTMLConverter=(noteObj,criminalObj)=>{
    return`
    <section class="note">
    <div class="note--suspect">Suspect: ${criminalObj.name}</div>
    <div class="note--author">Author: ${noteObj.author}</div>
    <div class="note--date">Date: ${new Date(noteObj.date).toLocaleDateString('en-US')}</div>
    <div class="note--text">Content: ${noteObj.content}</div>
    </section>
    `
}