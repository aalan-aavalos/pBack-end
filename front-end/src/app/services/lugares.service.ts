import { Injectable } from '@angular/core';
import { Lugar } from '../models/lugares';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LugaresService {
  private URL_API='http://localhost:3000/lugares';
  public lugar:Lugar=
  {idLug:0,nomLug:''}
  lugares:Lugar[]=[];

  constructor(private http: HttpClient) {}

  getLug(){
    return this.http.get<Lugar[]>(this.URL_API);
  }
}
