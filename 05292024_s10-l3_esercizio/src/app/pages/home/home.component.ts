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
  productsFavoritesArr: iProduct[] = [];
  cardArr: iProduct[] = [];
  constructor(private productSvc: ProductService) {}

  ngOnInit() {
    const savedFavorites = localStorage.getItem('productsFavorites');
    if (savedFavorites) {
      this.productsFavoritesArr = JSON.parse(savedFavorites);
    }
    this.productSvc.getProducts().subscribe((json) => {
      this.jsonContentArr = json;
      this.productsArr = this.jsonContentArr.products;
      console.log(this.jsonContentArr);
      console.log(this.productsArr);
    });
  }

  addToFavorites(productFavorite: iProduct) {
    this.productsFavoritesArr.push(productFavorite);
    localStorage.setItem(
      'productsFavorites',
      JSON.stringify(this.productsFavoritesArr)
    );
    console.log('Prodotto aggiunto nei preferiti', this.productsFavoritesArr);
  }

  addToCard(product: iProduct) {
    this.productSvc.addToCart(product);
    /*
    this.cardArr.push(product);
    localStorage.setItem('productsCard', JSON.stringify(this.cardArr));
    console.log('Prodotto aggiunto al carrello', this.cardArr);*/
  }
}
