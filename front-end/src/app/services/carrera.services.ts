import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carrera } from '../models/carrera';
@Injectable({
  providedIn: 'root'
})
export class CarreraService {
  URL_API='https://gitapirestprueba-production.up.railway.app/carreras/';
  public carrera:Carrera={idCar:0,nomCar:'',area:''}

  carreras:Carrera[]=[];

  constructor(private http: HttpClient) { }
  getCar(){
    return this.http.get<Carrera[]>(this.URL_API)
  }
}
