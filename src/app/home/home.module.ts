import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ListPageModule } from '../screens/list/list.module';
import { ProductPageModule } from '../screens/product/product.module';
import { HeardPageModule } from '../layout/heard/heard.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ListPageModule,
    ProductPageModule,
    HeardPageModule,
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
