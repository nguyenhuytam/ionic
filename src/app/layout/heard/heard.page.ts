import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heard',
  templateUrl: './heard.page.html',
  styleUrls: ['./heard.page.scss'],
})
export class HeardPage {

  constructor( private router:Router) { }
  profile(){
    this.router.navigate(['/profile']);
  }

  home(){

  }
  settings(){}
}
