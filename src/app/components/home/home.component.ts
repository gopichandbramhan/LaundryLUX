import { Component, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const elementPos = this.el.nativeElement.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (elementPos < windowHeight) {
      this.renderer.addClass(this.el.nativeElement, 'animated');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'animated');
    }
  }
}
