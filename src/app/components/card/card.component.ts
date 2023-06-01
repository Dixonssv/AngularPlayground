import { Component, OnInit, ViewChild } from '@angular/core';
import { DragCardDirective, DragCardEnded, DragCardMoved, DragCardStarted } from 'src/app/directives/dragCard/drag-card.directive';
import { DragAndDropService } from 'src/app/services/DragAndDrop/drag-and-drop.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {

  @ViewChild(DragCardDirective) dragCard! : DragCardDirective;

  constructor(private dragAndDropService: DragAndDropService) {

  }

  ngOnInit(): void {

  }

  dragStarted(event: DragCardStarted) {
    console.log(event.event.type);
    console.log(event.mousePosition);
    console.log(event.pivot);
    this.dragAndDropService.moveElementStart(event);
  }

  dragMoved(event: DragCardMoved) {
    this.dragAndDropService.moveElement(event);
  }

  dragEnded(event: DragCardEnded) {
    console.log(event.event.type);
  }
}
