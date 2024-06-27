import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
 
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  showButton: boolean = true;

  toggleButtonVisibility() {
    this.showButton = !this.showButton;
  }
}
