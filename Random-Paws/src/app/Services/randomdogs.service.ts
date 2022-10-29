import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RandomdogsService {
  constructor(private Http: HttpClient) {}

  dogUrl = 'https://dog.ceo/api/breeds/image/random/12';

  dogUrl2 = 'http://localhost:3000/dogs';

  getRandomPic(): Observable<any> {
    return this.Http.get<any>(this.dogUrl).pipe(
      catchError(this.handleError('getRandomPic', []))
    );
  }

  getFavouritepic() {
    return this.Http.get<any>(this.dogUrl2).pipe(
      catchError(this.handleError('getFavouritepic', []))
    );
  }

  deletepics(id: number) {
    return this.Http.delete<number>(this.dogUrl2 + '/' + id);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}
