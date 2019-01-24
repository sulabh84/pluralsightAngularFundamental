import { Component, OnInit } from '@angular/core'
import { EventService } from './shared/event.service'
import { ToastrService } from '../common/toastr.service'
import { ActivatedRoute } from '@angular/router'
import { IEvent } from './shared/event.model'

declare let toastr

@Component({
  selector : 'events-list',
  template: `
    <div>
      <h1>Upcomming Angular Events</h1>
      <hr>
      <div class="raw">
        <div class="col-md-5" *ngFor="let event1 of events">
          <event-thumbnail
              #thumbnail
              (click) = "handleThumbnailClick(event1.name)"
              (eventClick) = "handleEventClicked($event)"
              [event]="event1"></event-thumbnail>
          </div>
        </div>
       <h3>{{thumbnail.someproperty}}</h3>
    </div>
  `
})
export class EventsListComponent implements OnInit {
  events:IEvent[]

  constructor(private eventService:EventService, private toastrService:ToastrService,
                  private activatedRoute:ActivatedRoute){
  }

  ngOnInit(){
    this.events = this.activatedRoute.snapshot.data['events']
  }

  handleEventClicked(data) {
     console.log('received:', data)
  }

  handleThumbnailClick(eventName){
      this.toastrService.success(eventName)
  }

}
