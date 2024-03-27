

import { Injectable } from '@angular/core';
export interface Product{
  [x: string]: any;
  id:number;
  name:string;
  img:string;
  price:string;
}
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public product: Product[] = [
    {
    id:1,
    name: 'iPhone 11 Pro Max',
    img: 'assets/images/image.png',
    price:'10.00',
  },
  {
    id:2,
    name: 'iPhone 11 Pro Max',
    img: 'assets/images/image.png',
    price:'10.00',
  },
  {
    id:3,
    name: 'iPhone 11 Pro Max',
    img: 'assets/images/image.png',
    price:'10.00',
  },
  {
    id:4,
    name: 'iPhone 11 Pro Max',
    img: 'assets/images/image.png',
    price:'10.00',
  },
  {
    id:5,
    name: 'iPhone 11 Pro Max',
    img: 'assets/images/image.png',
    price:'10.00',
  },    {
    id:6,
    name: 'iPhone 11 Pro Max',
    img: 'assets/images/image.png',
    price:'10.00',
  }
];

  constructor() { }

  public getProduct(): Product[] {
    return this.product;
  }

  public getProductID(id: number): Product {
    return this.product[id];
  }

  private selectedProduct: Product | undefined;
  setSelectedProduct(product: Product) {
    this.selectedProduct = product;
  }

  getSelectedProduct(): Product | undefined {
    return this.selectedProduct;
  }
}
