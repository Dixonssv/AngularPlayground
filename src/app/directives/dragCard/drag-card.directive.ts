import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { DragContainerDirective } from '../dragContainer/drag-container.directive';

@Directive({
  selector: '[dragCard]',
})
export class DragCardDirective {
  public element: HTMLElement; 

  private dragging: boolean = false;
  private pivot: {x: number, y: number} | null; // Relativo al elemento

  @Input()
  container?: DragContainerDirective;

  @Output('dragStarted')
  started: EventEmitter<DragCardStarted> = new EventEmitter<DragCardStarted>;

  @Output('dragMoved')
  moved: EventEmitter<DragCardMoved> = new EventEmitter<DragCardMoved>;

  @Output('dragEnded')
  ended: EventEmitter<DragCardEnded> = new EventEmitter<DragCardEnded>;

  @HostListener('mousedown', ['$event']) onMouseDown($event: MouseEvent){
    let rect = this.element.getBoundingClientRect();

    this.pivot = {
      x: $event.pageX - rect.left,
      y: $event.pageY - rect.top
    }

    let dragCardStarted: DragCardStarted = {
      element: this.element,
      event: $event,
      mousePosition: {
        x: $event.pageX, 
        y: $event.pageY
      },
      pivot: this.pivot
    };

    this.dragging = true;
    this.started.emit(dragCardStarted);
  }

  @HostListener('mousemove', ['$event']) onMouseMoved($event: MouseEvent) {
    if(this.dragging === true) {
      let rect = this.element.getBoundingClientRect();

      let dragCardMoved: DragCardMoved = {
        element: this.element,
        event: $event,
        mousePosition: {
          x: $event.pageX, 
          y: $event.pageY
        },
        pivot: this.pivot!
      }

      this.moved.emit(dragCardMoved);
    }
  }

  @HostListener('mouseup', ['$event']) onMouseUp($event: MouseEvent){
    let dragCardEnded: DragCardEnded = {
      element: this.element,
      event: $event
    };

    this.dragging = false;
    this.ended.emit(dragCardEnded);
  }

  constructor(private elementRef: ElementRef) { 
    this.element = this.elementRef.nativeElement;
    this.pivot = null;
  }

}

export declare interface DragCardStarted {
  element: HTMLElement;
  event: Event;
  mousePosition: {x: number, y: number};
  pivot: {x: number, y: number};
}

export declare interface DragCardMoved {
  element: HTMLElement;
  event: Event;
  mousePosition: {x: number, y: number};
  pivot: {x: number, y: number}
}

export declare interface DragCardEnded {
  element: HTMLElement;
  event: Event;
}


