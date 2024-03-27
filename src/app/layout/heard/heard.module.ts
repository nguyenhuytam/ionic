import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeardPageRoutingModule } from './heard-routing.module';

import { HeardPage } from './heard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeardPageRoutingModule
  ],
  exports: [HeardPage],
  declarations: [HeardPage]
})
export class HeardPageModule {}
