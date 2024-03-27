import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductPageRoutingModule } from './product-routing.module';

import { ProductPage } from './product.page';
import { HeardPageModule } from 'src/app/layout/heard/heard.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductPageRoutingModule,
    HeardPageModule,
  ],
  exports: [ProductPage],
  declarations: [ProductPage]
})
export class ProductPageModule {}
export { ProductPage };

