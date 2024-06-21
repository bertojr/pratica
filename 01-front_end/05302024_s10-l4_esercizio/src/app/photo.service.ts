import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, throwError } from 'rxjs';
import { iPhoto } from './photo';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PhotoService {
  apiUrl: string = 'https://jsonplaceholder.typicode.com/photos';
  favoritesSubject = new Subject<number>();
  favorites$ = this.favoritesSubject.asObservable();
  countFavorites: number = 0;

  constructor(private http: HttpClient) {}

  getPhotos(): Observable<iPhoto[]> {
    return this.http
      .get<iPhoto[]>(this.apiUrl)
      .pipe(
        catchError((error) =>
          throwError(() => new Error(this.mappaturaErrori(error)))
        )
      );
  }
  delete(id: number) {
    return this.http
      .delete<iPhoto>(`${this.apiUrl}/${id}`)
      .pipe(
        catchError((error) =>
          throwError(() => new Error(this.mappaturaErrori(error)))
        )
      );
  }

  addToFavorites() {
    this.countFavorites++;
    return this.favoritesSubject.next(this.countFavorites);
    /*
    return this.favoritesSubject.next(photo);*/
  }

  mappaturaErrori(statusCode: number) {
    let errore = '';
    switch (statusCode) {
      case 400:
        errore = 'Bad Request';
        break;
      case 401:
        errore = 'Unauthorized';
        break;
      case 403:
        errore = 'Forbidden';
        break;
      case 404:
        errore = 'Not Found';
        break;
      case 409:
        errore = 'Conflict';
        break;
      case 500:
        errore = 'Internal Server Error';
        break;
      case 503:
        errore = 'Service Unavailable';
        break;
      default:
        errore = 'Errore sconosciuto';
    }
    return errore;
  }
}
