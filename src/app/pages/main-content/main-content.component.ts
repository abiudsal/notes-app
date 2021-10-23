import { Component, ElementRef, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NoteService } from '../../shared/note.service';
import { Note } from '../../models/Note';

import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  public modalTitle = ""
  public title = ""
  public body = ""
  public color = 1
  public notes: Array<Note>
  public saved: Array<Note> = []
  public deleted: Array<Note> = []
  public pinned: Array<Note> = []
  public favs: Array<Note> = []
  public display: Array<Note> = []
  public openedNote = 0
  public isNew = false;

  public path:string = ""
  @ViewChild("modal", {static: false}) myModalInfo!: TemplateRef<any>;


  constructor(
    private modalService: NgbModal,
    private noteService: NoteService,
    public route: ActivatedRoute
  ) { 
    this.route.url.subscribe(params => {
      if(params[0]){
        this.path = params[0].path;
        console.log(params[0].path);
      }      
    })


    this.notes = noteService.getAll()

    this.updateList()
  }

  ngOnInit(): void {
  }

  mostrarModal(){
    this.modalService.open(this.myModalInfo, { centered: true }).result.then( r => {
      console.log("Tu respuesta ha sido: " + r);
      if(r==true){
        if(this.isNew){
          this.create()
        }
        else{
          this.save()
        }
      }
    }, error => {
      console.log(error);
    });
  }

  setColor(n: number){
    this.color = n
  }

  pin(event: any){
    //console.log("pin")

    //console.log(event)
    this.noteService.togglePin(event)
    this.notes = this.noteService.getAll()

    this.updateList()
  }

  fav(event: any){
    //console.log(event)
    //console.log("fav")
    this.noteService.toggleFav(event)
    this.notes = this.noteService.getAll()

    this.updateList()
  }

  delete(event: any){
    //console.log("delete")

    //console.log(event)
    this.noteService.delete(event)
    this.notes = this.noteService.getAll()

    this.updateList()
  }

  openForEdit(event: any){
    this.isNew = false
    //console.log(event)
    this.modalTitle = "Edit note"
    this.openedNote = event

    //console.log("edicion de nota")
    this.title = this.notes[event].title
    this.body = this.notes[event].body
    this.color = this.notes[event].color
    this.mostrarModal()

    //this.updateList()
  }

  openForCreate(){
    this.isNew = true
    this.modalTitle = "Create note"
    this.mostrarModal()

    //this.updateList()
  }

  save(){
    this.noteService.update(this.openedNote, this.title, this.body, this.color)
    this.notes = this.noteService.getAll()

    this.title = ""
    this.body = ""
    this.color = 1

    //console.log("creacion de nota")
    this.updateList()
  }

  create(){
    this.noteService.add(this.title, this.body, this.color)
    this.notes = this.noteService.getAll()

    this.title = ""
    this.body = ""
    this.color = 1

    //console.log("creacion de nota")
    this.updateList()
  }

  updateList(){    
    this.saved = []
    this.deleted = []
    this.pinned = []
    this.favs = []
    
    this.notes.forEach((note)=>{
      if(note.deleted){
        this.deleted.push(note)
      }
      else{
        this.saved.push(note)
        if(note.pinned){
          this.pinned.push(note)
        }
        if(note.fav){
          this.favs.push(note)
        }
      }
    })

    if(this.path=="trash"){
      this.display = this.deleted
    }
    else if(this.path=="favs"){
      this.display = this.favs
    }
    else{
      this.display = this.saved
    }
  }

}
