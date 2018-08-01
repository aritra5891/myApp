import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})

export class DropDownDirective {

  @HostBinding('class.open') flag: boolean = false;


  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('click') onclick($event: Event) {
    this.flag = !this.flag;
  }

  @HostListener('document:click') clickout($event: Event) {
    if (!this.el.nativeElement.contains(event.target)) {
      this.renderer.removeClass(this.el.nativeElement, 'open');
      this.flag = false;
    }
  }


}