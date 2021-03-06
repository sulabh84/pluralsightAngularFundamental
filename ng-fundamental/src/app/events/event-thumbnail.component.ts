import { Component, Input, Output, EventEmitter } from '@angular/core'
import { IEvent } from './shared/event.model'

@Component({
  selector: 'event-thumbnail',
  template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
        <h2>{{event.name | uppercase}}</h2>
        <div>Date : {{event.date | date}}</div>
        <div>Time : {{event.time}}</div>
        <div>Price : \${{event.price}}   </div>
        <div>
          <span>Location : {{event.location.address}}</span>
          <span>&nbsp;</span>
          <span> {{event.location.city}}, {{event.location.country}} </span>
        </div>
        <button class="btn btn-primary" (click)="handleClickMe()">Click Me!!</button>
      </div>
  `
})

export class EventThumbnailComponent {
  @Input() event:IEvent
  @Output() eventClick = new EventEmitter()
  someproperty:any = "some value"

  handleClickMe(){
    console.log('Clicked!!')
    this.eventClick.emit('foo')
  }

  logfoo() {
    console.log('foo')
  }
}
