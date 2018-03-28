import React from 'react'
import Note from './Note'

class Board extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            notes: [
                {
                    id: 1,
                    note: "Call mom"
                },
                {
                    id: 2,
                    note: "Study"
                }
            ]
        }
        this.eachNote = this.eachNote.bind(this)
    }

    eachNote(note, i) {
        return (
            <Note key={i} index={i}>
                {note.note}
            </Note>
        )
    }

    render() {
        return (
            <div>
                {this.state.notes.map(this.eachNote)}
            </div>
        )
    }
}

export default Board
