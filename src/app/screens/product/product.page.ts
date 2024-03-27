import { ActivatedRoute } from '@angular/router';
import { DataService, Product } from '../../models/product.model';
import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage {
  selectedProduct:any ;
  constructor(private route: ActivatedRoute , private product : DataService) {
    this.selectedProduct = this.product.getSelectedProduct();
   }
}
