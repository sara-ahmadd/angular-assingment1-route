import { Component, OnInit } from '@angular/core';
// import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  aboutTitle = 'ABOUT COMPONENT';
  pageName = 'about';
  // constructor(private _titleService: Title) {
  //   _titleService.setTitle('about');
  // }

  ngOnInit(): void {}
}
