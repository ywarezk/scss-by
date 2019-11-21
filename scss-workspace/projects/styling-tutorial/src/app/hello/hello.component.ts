import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  template: `
    <p class="hello">
      hello works!
    </p>
    <img src="/assets/{{img}}" />
    <button (click)="changeImage()"> change image </button>
  `,
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  img = 'puppy.jpg';

  constructor() { }

  ngOnInit() {
  }

  changeImage = () => {
    if (this.img === 'puppy.jpg') {
      this.img = 'jerusalem.jpg'
    } else {
      this.img = 'puppy.jpg'
    }
  }

}
