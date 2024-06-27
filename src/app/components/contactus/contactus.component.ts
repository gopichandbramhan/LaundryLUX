import { Component } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent {
  resetForm(form: any) {
    Swal.fire( '!', 'Submitted Successfully');
    form.resetForm();
  }
}