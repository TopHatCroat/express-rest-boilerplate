import Note from "./note";

let exampleNotes: Note[] = [
    new Note(1, "Some note"),
    new Note(2, "Some important note"),
    new Note(3, "Some very important note"),
    new Note(4, "Some random note"),
];

class NoteRepository {
    public getAll(): Note[] {
        return exampleNotes;
    }

    public getById(id: number): Note {
        return exampleNotes.filter((note) => note.id === id)[0];
    }

    public create(note: Note): Note {
        const newNote = new Note(Math.floor(Math.random() * 100000), note.text);
        exampleNotes.push(newNote);
        return newNote;
    }

    public delete(id: number) {
        exampleNotes = exampleNotes.filter((note) => note.id !== id);
    }
}

export default new NoteRepository();
