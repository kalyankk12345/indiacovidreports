import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { catchError, tap, map } from 'rxjs/operators';
import { Gen } from './gen';

@Injectable({
  providedIn: 'root'
})
export class CovidService {

  constructor(private http:HttpClient) { }

  get():Observable<any>{
    return this.http.get<any>('https://api.covid19india.org/data.json')
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),

      );

  }

  getC():Observable<any>{
    return this.http.get<any>('https://api.covid19api.com/summary')
    .pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
    );
  }
  getA(t:string):Observable<Gen>{
    return this.http.get<Gen>("http://newsapi.org/v2/top-headlines?country=in&apiKey=761b393ac8a74380827c41eb01ffec18")
      .pipe(
        tap(data => console.log('All: ' + JSON.stringify(data))),

      );
  }
}
