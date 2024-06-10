import { Component, ElementRef, HostListener, QueryList, Renderer2, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChildren('scrollAnimation') scrollElements!: QueryList<ElementRef>;

  ngAfterViewInit() {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: '0px',
      threshold: 0.1 // Trigger when 10% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fadeInDown');
          entry.target.classList.remove('invisible');
          observer.unobserve(entry.target); // Stop observing once the animation is triggered
        }
      });
    }, options);

    this.scrollElements.forEach(element => {
      element.nativeElement.classList.add('invisible');
      observer.observe(element.nativeElement);
    });
  }
}
