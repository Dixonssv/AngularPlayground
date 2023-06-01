import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DragCardDirective } from './directives/dragCard/drag-card.directive';
import { DragContainerDirective } from './directives/dragContainer/drag-container.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    DashboardComponent,
    DragCardDirective,
    DragContainerDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
