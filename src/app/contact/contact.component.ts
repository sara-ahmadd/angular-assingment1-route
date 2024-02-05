import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  contactTitle = 'CONATCT SECTION';
  constructor(private _titleService: Title) {
    _titleService.setTitle('contact');
  }

  ngOnInit(): void {}
}
