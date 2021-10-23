import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() title!: string 
  @Input() body!: string 
  @Input() color!: number
  @Input() id!: number

  @Output('fav') favEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output('pin') pinEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output('delete') deleteEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output('edit') editEvent: EventEmitter<number> = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    //console.log("click")
    //this.deleteEvent.emit();
    this.editEvent.emit(this.id);
  }

  onDelete(event: any){
    //console.log("delete")
    this.deleteEvent.emit(this.id);
    event.stopPropagation();
  }

  onPin(event: any){
    //console.log("delete")
    //console.log("pin")
    this.pinEvent.emit(this.id);
    event.stopPropagation();
  }

  onFav(event: any){
    //console.log("delete")
    //console.log("fav")
    this.favEvent.emit(this.id);
    event.stopPropagation();
  }

}
