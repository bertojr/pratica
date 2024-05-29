import { Component } from '@angular/core';
import { ProductService } from '../../product.service';
import { iJsonContent } from '../../models/json-content';
import { iProduct } from '../../models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  jsonContentArr!: iJsonContent;
  productsArr: iProduct[] = [];
  constructor(private productSvc: ProductService) {}

  ngOnInit() {
    this.productSvc.getProducts().subscribe((json) => {
      this.jsonContentArr = json;
      this.productsArr = this.jsonContentArr.products;
      console.log(this.jsonContentArr);
      console.log(this.productsArr);
    });
  }
}
