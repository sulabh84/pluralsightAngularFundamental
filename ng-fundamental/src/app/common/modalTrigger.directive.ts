import { Directive, OnInit, Inject, ElementRef } from '@angular/core'
import { JQ_TOKEN } from './jQuery.service';

@Directive({
    selector: '[modal-trigger]'
})

export class ModalTriggerDirective implements OnInit{
    private el: HTMLElement

    constructor(ref: ElementRef, @Inject(JQ_TOKEN) private $: any){
        this.el = ref.nativeElement
        console.log('Printing a shit : '+this.$);
    }

    ngOnInit(){
        this.el.addEventListener('click', e => {
            console.log('-- Printing a shit : '+this.$);
            console.log('-- Printing a shit : '+ this.$('#simple-modal'));
            console.log('-- Printing a shit : '+ this.$('#simple-modal').modal);
            this.$('#simple-modal').modal({})
        } )
    }
}