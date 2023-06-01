import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[dragContainer]'
})
export class DragContainerDirective implements OnInit{

  public element: HTMLElement;
  public offset!: {x: number, y: number};

  constructor(private elementRef: ElementRef) { 
    this.element = elementRef.nativeElement;
  }

  ngOnInit(): void {
    let rect = this.element.getBoundingClientRect();

    this.offset = {
      x: rect.left,
      y: rect.top
    }
  }
}
