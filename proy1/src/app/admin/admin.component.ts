import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  template: `
  <!-- <p>admin works!</p> -->
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
