import { Injectable } from '@angular/core'

declare let toaSrt:any

@Injectable()
export class ToastrService{

  success(message:string, title?: string){
    toaSrt.success(message,title)
  }

}
