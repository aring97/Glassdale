import {criminalList} from "./criminals/criminalsList.js"
import {ConvictionSelect} from "./convictions/convictionSelector.js"
import {officersList} from "./officers/officersList.js"
import {OfficerSelect} from "./officers/officerSelected.js"
import {NoteForm} from "./notes/NoteForm.js"
import {ShowNoteButton} from "./notes/ShowNoteButton.js"
import "./notes/NoteList.js"
import "./alibis/alibiSelector.js"
import {showWitnessButton} from "./witnesses/witnessesButton.js"
import "./witnesses/witnessList.js"

showWitnessButton()
criminalList()
officersList()
OfficerSelect()
ConvictionSelect()
NoteForm()
ShowNoteButton()