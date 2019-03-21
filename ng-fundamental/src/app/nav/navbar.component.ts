import { Component } from '@angular/core'
import { AuthService } from '../user/auth.service'

@Component({
  selector : 'nav-bar',
  templateUrl : './navbar.component.html',
  styles: [`
        li > a.active { color: #F97942; }
    `]
})

export class NavBarComponent {
  constructor(public auth:AuthService){}

}
