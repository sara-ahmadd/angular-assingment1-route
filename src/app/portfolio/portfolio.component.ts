import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  portfolioTitle = 'PORTFOLIO COMPONENT';
  constructor(private _titleService: Title) {
    _titleService.setTitle('portfolio');
  }

  ngOnInit(): void {}
}
