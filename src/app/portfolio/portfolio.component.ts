import { Component, OnInit } from '@angular/core';
// import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  portfolioTitle = 'PORTFOLIO COMPONENT';
  // constructor(private _titleService: Title) {
  //   _titleService.setTitle('portfolio');
  // }
  imageSource: string = '';
  ngOnInit(): void {}
  openModal(imgSource: string) {
    //   const modalDiv = document.getElementById('modal-container');
    //   if (modalDiv) {
    //     modalDiv.style.display = 'flex';
    //     // modalDiv.innerHTML = `<img src=${imgSource} class='col-10 py-5 '/>`;
    //     modalDiv.innerHTML = `
    //     <div class="container">
    //   <div class="row justify-content-center align-items-center  ">
    //     <div class="col-lg-8 col-md-8 ">
    //       <img src=${imgSource} class = 'w-100 h-100'/>
    //     </div>
    //   </div>
    // </div>
    //     `;
    //   }
    this.imageSource = imgSource;
  }
  closeModal() {
    const modalDiv = document.getElementById('modal-container');
    if (modalDiv) {
      modalDiv.style.display = 'none';
    }
  }
}
