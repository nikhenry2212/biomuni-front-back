import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { WeatherPost } from 'src/app/model/weather-post.model';

@Injectable({
  providedIn: 'root'
})
export class AtivarSpliklerService {
  url: string = 'http://localhost:8080/activate-sprinkler'

  constructor(
    private http: HttpClient

  ) { }
  create(product: WeatherPost): Observable<WeatherPost>{
    return this.http.post<WeatherPost>(this.url, product).pipe(
      map(obj => {
        // console.log(obj);
      return  obj
      }
    ))
  }
  getSprinkler():Observable<WeatherPost[]>{
    return this.http.get<WeatherPost[]>(this.url).pipe(map(obj => {
      return obj
    }))
  }
}
