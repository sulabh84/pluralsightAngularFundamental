import { Component } from '@angular/core'

@Component({
  selector : 'nav-bar',
  templateUrl : './navbar.component.html',
  styles: [`
        li > a.active { color: #F97942; }
    `]
})

export class NavBarComponent {


}
