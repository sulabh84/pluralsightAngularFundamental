import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({

  template: `
    <h1>New Event</h1>
    <hr>
    <div class="col-md-6">
      <h3>[Create form go] </h3>
      <br/>
      <br/>
      <button type="submit" class="btn btn-primary">save</button>
      <button type="button" class="btn btn-default" (click)="cancel()">cancel</button>
    </div>
  `

})

export class CreateEventComponent{
  isDirty:boolean = true
  constructor(private router:Router){}

  cancel(){
    this.router.navigate(['/events'])
  }

}
