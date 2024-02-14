import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  windowScroll: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    let scrollPosition = window.scrollY;

    if (scrollPosition > 10) {
      this.windowScroll = true;
    } else {
      this.windowScroll = false;
    }
  }
}
