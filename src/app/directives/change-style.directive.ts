import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeStyle]'
})
export class ChangeStyleDirective {

  constructor(public el: ElementRef) { }

  @HostListener ('mouseenter')  onMouseEnter() {
    this.el.nativeElement.style.fontSize = '20px'
    this.el.nativeElement.style.color = 'red'
    this.el.nativeElement.style.transition = '.3s'
  }

  @HostListener ('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.fontSize = 'initial'
    this.el.nativeElement.style.color = 'initial'
  }

}
