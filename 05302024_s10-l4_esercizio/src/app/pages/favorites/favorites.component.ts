import { Component } from '@angular/core';
import { PhotoService } from '../../photo.service';
import { iPhoto } from '../../photo';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrl: './favorites.component.scss',
})
export class FavoritesComponent {
  photosFavoritesArr: iPhoto[] = [];
  constructor(private photoSvc: PhotoService) {}

  ngOnInit() {
    this.photoSvc.favorites$.subscribe((favorite) => {
      this.photosFavoritesArr.push(favorite);
      console.log(favorite);
    });
  }

  removeFromFavorites(id: number) {
    this.photosFavoritesArr = this.photosFavoritesArr.filter(
      (photo) => photo.id !== id
    );
  }
}
