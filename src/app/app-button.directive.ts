import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appAppButton]'
})
export class AppButtonDirective {

  constructor(el: ElementRef) { 
    el.nativeElement.style.backgroundColor = "rgb(40, 156, 233)";
    el.nativeElement.style.color = "#fff";
    el.nativeElement.style.margin = "30px";
    el.nativeElement.style.fontWeight = "900";
    el.nativeElement.style.fontFamily = "Noto Sans, sans-serif";
  };

}
