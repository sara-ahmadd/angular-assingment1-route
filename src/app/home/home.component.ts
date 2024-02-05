import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  homeTitle = 'START FRAMEWORK';
  imgSource = './assets/images/home.svg';
  pageName = 'home';
  constructor(private _titleService: Title) {
    _titleService.setTitle('home');
  }

  ngOnInit(): void {}
}
