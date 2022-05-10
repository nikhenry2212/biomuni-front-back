import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Weather} from './../../../model/weather.model'
import { Key } from 'src/environments/security/key';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }
  getWeather(query:any): Observable<any>{
    let res = 'http://api.openweathermap.org/data/2.5/weather';
    return this.http.get(res, {
      params: {
        appid: Key,
        lang:'pt',
        units:'metric',
        q: query,
      }
      
    }).pipe(map((result) => {
      return result;
    }));
  }
}
