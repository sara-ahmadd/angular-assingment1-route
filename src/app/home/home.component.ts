import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  homeTitle = 'START FRAMEWORK';
  imgSource = './assets/images/home.svg';
  pageName = 'home';

  ngOnInit(): void {}
}
