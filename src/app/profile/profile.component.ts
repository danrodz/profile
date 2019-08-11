import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  @ViewChild('name', { static: true }) name: ElementRef;
  intro = '_';
  constructor() {}

  ngOnInit() {
    const intro = 'Full-Stack Software Engineer in Houston, TX';
    const introArr = intro.split('');
    const interval = setInterval(() => {
      this.myFunction();
      const length = this.intro.length;
      this.intro = this.intro.substr(0, length - 1);
      if (introArr.length) return (this.intro += introArr.shift() + '_');
      clearInterval(interval);
      this.myFunction('#fff');
    }, 100);
  }

  getColor = () => {
    let colorString = '';
    for (let i = 0; i < 6; i++) {
      const num = Math.floor(Math.random() * 17);
      const hexNum = num.toString(16);
      colorString += hexNum;
    }
    return colorString;
  };

  myFunction = (color = '') => {
    // const x = document.getElementById("demo");
    const x = this.name.nativeElement;
    const txt = x.textContent;
    let newText = '';
    for (let i = 0, l = txt.length; i < l; i++) {
      newText += txt.charAt(i).fontcolor(color || this.getColor());
    }
    x.innerHTML = newText;
  };
}
