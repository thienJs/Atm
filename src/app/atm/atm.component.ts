import { Component, OnInit } from '@angular/core';

import Typed from 'typed.js';



@Component({
  selector: 'app-atm',
  templateUrl: './atm.component.html',
  styleUrls: ['./atm.component.css']
})
export class AtmComponent implements OnInit {
  showScreen = false;
  passwordInput = '';
  idInput = '';
  constructor() { }

  ngOnInit() {
    // const typed = new Typed('.element', {
    //   strings: ['Visa.', 'Master Card.', 'Express.', 'All In One Place.'],
    //   smartBackspace: true, // Default value
    //   backDelay: 2000,
    //   typeSpeed: 70,
    //   backSpeed: 70,
    //   loop: true,
    //   loopCount: Infinity,
    // });
  }

  onShowLogin(data: boolean) {
    this.showScreen = data;
  }

}
