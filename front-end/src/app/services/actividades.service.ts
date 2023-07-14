import { Actividad } from '../models/actividades';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {
  URL_API='http://localhost:3000/actividades/';
  public actividad:Actividad=
  { id:0,fecha:'',nombre:'',lugar:'',responsable:''}

  actividades:Actividad[]=[]

  constructor(private http: HttpClient){}

  getAct(){
    return this.http.get<Actividad[]>(this.URL_API)
  }
  insAct(actividades:Actividad){
    return this.http.post(this.URL_API,actividades)
  }
  updAct(actividades:Actividad){
    return this.http.put(this.URL_API+actividades.id,actividades)
  }
  delAct(id:Actividad){
    return this.http.delete(this.URL_API+id)
  }

}
