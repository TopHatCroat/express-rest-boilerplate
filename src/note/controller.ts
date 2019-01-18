import { Request, Response } from "express";
import repository from "./data/repository";

export default class NoteController {
    public async getAll(req: Request, res: Response) {
        const notes = repository.getAll();

        res.json(notes);
    }

    public async getById(req: Request, res: Response) {
        const noteId = req.params.noteId;
        const note = repository.getById(noteId);

        res.json(note);
    }

    public async create(req: Request, res: Response) {
        const note = repository.create(req.body);

        res.json(note);
    }

    public async delete(req: Request, res: Response) {
        const noteId = req.params.noteId;
        repository.delete(parseInt(noteId, 10));
        res.json({});
    }
}
