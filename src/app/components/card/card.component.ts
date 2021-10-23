import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Note } from '../../models/Note';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() note!: Note

  @Output('fav') favEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output('pin') pinEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output('delete') deleteEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output('edit') editEvent: EventEmitter<number> = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.editEvent.emit(this.note.id);
  }

  onDelete(event: any){
    this.deleteEvent.emit(this.note.id);
    event.stopPropagation();
  }

  onPin(event: any){
    this.pinEvent.emit(this.note.id);
    event.stopPropagation();
  }

  onFav(event: any){
    this.favEvent.emit(this.note.id);
    event.stopPropagation();
  }

}
