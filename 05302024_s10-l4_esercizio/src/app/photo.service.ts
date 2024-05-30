import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { iPhoto } from './photo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  apiUrl: string = 'https://jsonplaceholder.typicode.com/photos';
  favoritesSubject = new Subject<iPhoto>();
  favorites$ = this.favoritesSubject.asObservable();

  constructor(private http: HttpClient) {}

  getPhotos(): Observable<iPhoto[]> {
    return this.http.get<iPhoto[]>(this.apiUrl);
  }
  addToFavorites(photo: iPhoto) {
    return this.favoritesSubject.next(photo);
  }
}
