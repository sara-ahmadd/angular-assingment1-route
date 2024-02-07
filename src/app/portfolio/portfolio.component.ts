import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  portfolioTitle = 'PORTFOLIO COMPONENT';
  imageSource: string = '';
  display: boolean = false;
  ngOnInit(): void {}
  openModal(imgSource: string) {
    this.imageSource = imgSource;
    this.display = true;
  }
  closeModal() {
    this.display = false;
  }
}
