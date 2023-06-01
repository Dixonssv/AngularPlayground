import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { DragCardDirective } from 'src/app/directives/dragCard/drag-card.directive';
import { DragContainerDirective } from 'src/app/directives/dragContainer/drag-container.directive';
import { DragAndDropService } from 'src/app/services/DragAndDrop/drag-and-drop.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit{

  @ViewChild(DragContainerDirective) dragContainer! : DragContainerDirective;

  constructor(private dragAndDropService: DragAndDropService) {

  }
  ngAfterViewInit(): void {
    this.dragAndDropService.__init(this.dragContainer);
  }

  ngOnInit(): void {
    
  }
}
