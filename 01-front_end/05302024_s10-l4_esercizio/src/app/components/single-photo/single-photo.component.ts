import { Component, Input } from '@angular/core';
import { iPhoto } from '../../photo';

@Component({
  selector: 'app-single-photo',
  templateUrl: './single-photo.component.html',
  styleUrl: './single-photo.component.scss',
})
export class SinglePhotoComponent {
  @Input()
  photo!: iPhoto;

  delete(id: number) {}
}
