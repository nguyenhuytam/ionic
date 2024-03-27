import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedsPageRoutingModule } from './feeds-routing.module';

import { FeedsPage } from './feeds.page';
import { HeardPageModule } from 'src/app/layout/heard/heard.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedsPageRoutingModule,
    HeardPageModule,
  ],
  declarations: [FeedsPage]
})
export class FeedsPageModule {}
