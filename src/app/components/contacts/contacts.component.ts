
import { Component } from '@angular/core';
import {ExperienceItemComponent} from "../experience/experience-item/experience-item.component";

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [
    ExperienceItemComponent
  ],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {

  goToLinkedin() {
    window.open('https://www.linkedin.com/in/venelin-vasilev-10065120/', '_blank');
  }

  get email(): string {
    return 'sebastianofazzino92@gmail.com';
  }
}
