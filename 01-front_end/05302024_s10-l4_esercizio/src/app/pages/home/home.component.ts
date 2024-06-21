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
    this.photoService.getPhotos().subscribe((photos) => {
      this.photosArr = photos;
    });

    this.photoService.favorites$.subscribe((likeCount) => {
      this.countFavorites = likeCount;
    });
  }

  delete(id: number) {
    this.photoService.delete(id).subscribe(() => {
      this.photosArr = this.photosArr.filter((photo) => photo.id !== id);
      console.log('Foto eliminata');
    });
  }

  addToFavorites() {
    this.photoService.addToFavorites();
  }
}
