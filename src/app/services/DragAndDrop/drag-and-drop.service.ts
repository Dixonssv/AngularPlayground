import { Injectable } from '@angular/core';
import { DragCardDirective, DragCardMoved, DragCardStarted } from 'src/app/directives/dragCard/drag-card.directive';
import { DragContainerDirective } from 'src/app/directives/dragContainer/drag-container.directive';

@Injectable({
  providedIn: 'root'
})
export class DragAndDropService {

  public dragContainer: DragContainerDirective | null;

  private dragElement: HTMLElement | null;
  private placeholderElement: any;

  constructor() {
    this.dragContainer = null;
    this.dragElement =  null;
    this.placeholderElement = null
  }

  __init(dragContainer: DragContainerDirective) {
    this.dragContainer = dragContainer;
    console.log(this.dragContainer);
  }

  __destroy() {
    this.dragContainer = null;
  }

  moveElementStart(event: DragCardStarted) {
    this.dragElement = event.element;
    let parent = this.dragElement.parentElement;

    this.placeholderElement = this.dragElement.cloneNode();
    parent?.insertBefore(this.placeholderElement, this.dragElement);

    this.placeholderElement.classList.add("drag_card_placeholder");
  }

  moveElement(event: DragCardMoved) {

    event.element.style.top = (event.mousePosition.y - event.pivot.y - this.dragContainer?.offset.y!) + "px";
    event.element.style.left = (event.mousePosition.x - event.pivot.x - this.dragContainer?.offset.x!) + "px";

    console.log(event.event.type);
  }

}
