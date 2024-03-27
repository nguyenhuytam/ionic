import { Component, inject } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public popoverController: PopoverController,private router:Router) {}

  profile(){
    this.router.navigate(['/profile']);
  }
}
