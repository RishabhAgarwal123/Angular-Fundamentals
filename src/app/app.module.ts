import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventsThumbnailComponent } from './events/events-thumbnail.component';
import { NavComponent } from './nav/nav-component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routing.module';
import { FormsModule } from '@angular/forms';
import { TemplateForm } from './templateforms/template.component';
import { ModalForm } from './modalforms/modal.component';
import { AuthService } from './auth.service';

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    EventsThumbnailComponent,
    NavComponent,
    TemplateForm,
    ModalForm
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
