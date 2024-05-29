import { Component } from '@angular/core';
import { ProductService } from '../../product.service';
import { iProduct } from '../../models/product';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent {
  productsFavoritesArr: iProduct[] = [];
  cardArr: iProduct[] = [];
  constructor(private productSvc: ProductService) {}

  ngOnInit() {
    const savedFavorites = localStorage.getItem('productsFavorites');
    const savedCard = localStorage.getItem('productsCard');
    if (savedCard) {
      this.productsFavoritesArr = JSON.parse(savedCard);
    }
    if (savedFavorites) {
      this.productsFavoritesArr = JSON.parse(savedFavorites);
    }
  }

  removeToFavorites(productFavorite: iProduct) {
    this.productsFavoritesArr.splice(
      this.productsFavoritesArr.indexOf(productFavorite),
      1
    );
    localStorage.setItem(
      'productsFavorites',
      JSON.stringify(this.productsFavoritesArr)
    );
    console.log('Prodotto rimosso dai preferiti', this.productsFavoritesArr);
  }

  addToCard(product: iProduct) {
    this.cardArr.push(product);
    localStorage.setItem('productsCard', JSON.stringify(this.cardArr));
    console.log('Prodotto aggiunto al carrello', this.cardArr);
  }
}
