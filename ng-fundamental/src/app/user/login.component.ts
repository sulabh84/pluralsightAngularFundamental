import { Component } from '@angular/core'
import { AuthService } from './auth.service'
import { Router } from '@angular/router'

@Component({
  templateUrl: './login.component.html'
})

export class LoginComponent {

  loginInvalid = false

  constructor(private authService:AuthService, private router:Router){

  }
  login(formValue){
    console.log(formValue)
    this.authService.loginUser(formValue.userName, formValue.password)
      .subscribe(resp => {
        if(!resp){
          this.loginInvalid = true
        }else{
          this.router.navigate(['events'])
        }
      })
  }

  cancel(){
    this.router.navigate(['events'])
  }
}
