
import { Component } from '@angular/core';


@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {

  goToLinkedin() {
    window.open('https://www.linkedin.com/in/venelin-vasilev-10065120/', '_blank');
  }

  get email(): string {
    return 'venellinus@gmail.com';
  }
}
