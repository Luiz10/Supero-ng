import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[uppercase]'  
})
export class Uppercase{
   
    constructor(public ref: ElementRef){

    }
    @HostListener('input',['$event']) onKeyUp(event){
        this.ref.nativeElement.value = event.target.value.toUpperCase();
    }

}