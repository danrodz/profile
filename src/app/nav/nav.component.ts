import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @ViewChild('linkedIn', { static: true }) linkedIn: ElementRef;
  @ViewChild('github', { static: true }) github: ElementRef;
  @ViewChild('twitter', { static: true }) twitter: ElementRef;
  constructor() {}

  ngOnInit() {
    setTimeout(() => {
      [this.linkedIn, this.twitter, this.github].forEach(el => {
        el.nativeElement.classList = [];
      });
    }, 12000);
  }

  onHover = (name: string) => {
    let element: ElementRef;
    switch (name) {
      case 'github':
        element = this.github;
        break;
      case 'twitter':
        element = this.twitter;
        break;
      default:
        element = this.linkedIn;
    }
    const hasPathClass = !!element.nativeElement.classList.length;
    if (hasPathClass) return (element.nativeElement.classList = []);
    element.nativeElement.classList.add('path');
  };
}
