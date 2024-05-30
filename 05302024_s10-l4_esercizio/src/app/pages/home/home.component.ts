import { Component } from '@angular/core';
import { PhotoService } from '../../photo.service';
import { iPhoto } from '../../photo';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  photosArr: iPhoto[] = [];
  photosFavoritesArr: iPhoto[] = [];
  countFavorites: number = 0;
  constructor(private photoService: PhotoService) {}

  ngOnInit() {
    this.photoService.getPhotos().subscribe((photo) => {
      this.photosArr = photo;
    });
  }

  delete(id: number) {
    this.photosArr = this.photosArr.filter((photo) => photo.id !== id);
  }

  addToFavorites(photo: iPhoto) {
    this.photoService.addToFavorites(photo);
    this.countFavorites++;
  }
}
