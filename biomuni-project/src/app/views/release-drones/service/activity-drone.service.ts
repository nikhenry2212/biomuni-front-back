import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DronePost } from 'src/app/model/weather-post.model';

@Injectable({
  providedIn: 'root'
})
export class ActivityDroneService {
  url: string = 'http://localhost:8080/activate-drone'

  constructor(
    private http: HttpClient

  ) { }
  create(product: DronePost): Observable<DronePost>{
    return this.http.post<DronePost>(this.url, product).pipe(
      map(obj => {
        // console.log(obj);
      return  obj
      }
    ))
  }
  getDrone():Observable<DronePost>{
    return this.http.get<DronePost>(this.url).pipe(map(obj => {
      return obj
    }))
  }
}
