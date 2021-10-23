import { Injectable } from '@angular/core';
import { Note } from '../models/Note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
    private notes: Array<Note> = [
        new Note(0, "Hola", "Esto es una descripción", 4),
        new Note(1, "Hola 2", "Esto es una descripción 2", 3),
        new Note(2, "Hola 3", "Esto es una descripción 3", 6),
    ]
    constructor(){
        this.loadFromLocalStorage()
    }

    get(id: number){        
        return Object.assign({}, this.notes[id]);        
    }

    getAll(){
        return [...this.notes];
    }

    add(title: string, body: string, color: number){
        this.notes.unshift(new Note(0, title, body, color))

        this.notes.forEach((note, index)=>{
            note.id = index
        })
        this.saveInLocalStorage()
    }
    
    update(id: number, title: string, body: string, color: number){
        this.notes.splice(id, 1);
        this.notes.unshift(new Note(0, title, body, color))

        this.notes.forEach((note, index)=>{
            note.id = index
        })
        this.saveInLocalStorage()
    }

    delete(id: number){
        this.notes[id].deleted = !this.notes[id].deleted
        this.saveInLocalStorage()
    }

    togglePin(id: number){
        this.notes[id].pinned = !this.notes[id].pinned
        this.saveInLocalStorage()
    }
    
    toggleFav(id: number){
        this.notes[id].fav = !this.notes[id].fav  
        this.saveInLocalStorage()      
    }

    loadFromLocalStorage() {
       this.notes = JSON.parse(localStorage.getItem("notes") || "[]")
    }

    saveInLocalStorage() {
       localStorage.setItem("notes", JSON.stringify(this.notes))
    }
}

