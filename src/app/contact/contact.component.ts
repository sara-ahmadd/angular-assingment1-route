import { Component } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  contactTitle = 'CONATCT SECTION';
  user: User = {
    userName: '',
    userAge: null,
    userEmail: '',
    userPassword: '',
  };

  printInConsole() {
    console.log(this.user);
  }
}
