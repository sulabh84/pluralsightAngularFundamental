import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component'
import { TOASTR_TOKEN, Toastr } from './common/toastr.service'
import { RouterModule } from '@angular/router'
import { appRoutes } from '../routes'
import { Error404Component } from './errors/404.component'
import { AuthService } from './user/auth.service'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { CreateSessionComponent } from './events/event-details/create-session.component'
import { SessionListComponent } from './events/event-details/session-list.component'
import { CollapsibleWellComponent } from './common/Collapsible-well.component'
import { DurationPipe } from './events/shared/duration.pipe'
import {
EventsListComponent,
EventThumbnailComponent,
EventDetailsComponent,
CreateEventComponent,
EventService,
EventRouteActivator,
EventListResolver
} from './events/index'

declare let toastr:Toastr

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr},
    EventRouteActivator,
    EventListResolver,
    AuthService,
  {
    provide: 'canDeactivateCreateEvent',
    useValue: checkDirtyState
  }
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component:CreateEventComponent){
  if(component.isDirty){
    return window.confirm('you have not saved this event, do you really want to cancel?')
  }
  return true
}
