import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  openWhatsApp() {
    const whatsappUrl = `https://wa.me`;
    window.open(whatsappUrl, '_blank');
  }
}
