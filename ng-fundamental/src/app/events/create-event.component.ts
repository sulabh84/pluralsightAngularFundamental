import { Component } from '@angular/core'
import { Router } from '@angular/router'
import { EventService } from './index'

@Component({

  templateUrl: 'create-event.component.html'

})

export class CreateEventComponent{
  newEvent
  isDirty:boolean = true
  constructor(private router:Router, private eventService:EventService){}

  saveEvent(formValues){
    console.log(formValues)
    this.eventService.saveEvent(formValues).subscribe(() => {
      this.isDirty = false
      this.router.navigate(['/events'])
    })
  }

  cancel(){
    this.router.navigate(['/events'])
  }

}
