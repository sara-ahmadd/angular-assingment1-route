import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  templateUrl: './section-heading.component.html',
  styleUrls: ['./section-heading.component.css'],
})
export class SectionHeadingComponent implements OnInit {
  @Input() titleText: string = '';
  @Input() page = '';
  constructor() {}

  ngOnInit(): void {}
}
