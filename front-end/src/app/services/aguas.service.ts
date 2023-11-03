import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AguasService {

  constructor(private http: HttpClient) {}
  
  private apiKey = 'ae593d1b58f385934cbbd647005072ed';
  
  //private lat = '21.1561100';
  //private lon = '-100.9325000';

  getAguasS(inLat: any, inLon:any): Observable<any> {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?lat=' + inLat + '&lon=' + inLon + '&appid=' + this.apiKey);
  }
}
