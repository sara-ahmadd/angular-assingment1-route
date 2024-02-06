import { Component, OnChanges, OnInit } from '@angular/core';
// import { Title } from '@angular/platform-browser';
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
    userAge: 0,
    userEmail: '',
    userPassword: '',
  };
  // constructor(private _titleService: Title) {
  //   _titleService.setTitle('contact');
  // }

  printInConsole() {
    console.log(this.user);
  }
}
