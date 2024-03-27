import { Component } from '@angular/core';
import {  Router } from '@angular/router';

import { DataService, Product } from 'src/app/models/product.model';


@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage {
  private listProduct: DataService; // Khai báo DataService ở đây
  private selectedProduct: Product | undefined;

  constructor(private dataService: DataService, private router:Router) { // Inject DataService vào constructor
    this.listProduct = dataService; // Gán giá trị của dataService vào listProduct
  }


  getListProduct() :Product[] {
    return this.listProduct.getProduct();
  }

  getDetail(id: number) {
    this.selectedProduct = this.listProduct.getProductID(id);
    this.dataService.setSelectedProduct(this.selectedProduct)
    this.router.navigate(['/product/' + id]);

  }

}
