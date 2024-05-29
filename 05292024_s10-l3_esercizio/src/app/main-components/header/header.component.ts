import { Component } from '@angular/core';
import { ProductService } from '../../product.service';
import { iProduct } from '../../models/product';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  show: boolean = false;

  cardArr: iProduct[] = [];

  constructor(private productSvc: ProductService) {}

  ngOnInit() {
    const savedCard = localStorage.getItem('productsCard');
    if (savedCard) {
      this.cardArr = JSON.parse(savedCard);
    }
    this.productSvc.cart$.subscribe((product) => {
      this.cardArr.push(product);
      console.log('Prodotto aggiunto al carrello', this.cardArr);
    });
  }

  removeFromCard(product: iProduct, e: Event) {
    e.stopPropagation();
    this.cardArr.splice(this.cardArr.indexOf(product), 1);
    localStorage.setItem('productsCard', JSON.stringify(this.cardArr));
  }
}
