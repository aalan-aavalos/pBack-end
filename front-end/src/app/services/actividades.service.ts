import { Actividad } from '../models/actividades';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActividadesService {
  URL_API='http://localhost:3000/actividades/';
  public actividad:Actividad=
  { idAct:0,fecha:'',nomAct:'',idUsr:'',idLug:'',descripcion:''}

  actividades:Actividad[]=[]

  constructor(private http: HttpClient){}

  getAct(){
    return this.http.get<Actividad[]>(this.URL_API)
  }
  insAct(actividades:Actividad){
    return this.http.post(this.URL_API,actividades)
  }
  updAct(actividades:Actividad){
    return this.http.put(this.URL_API+actividades.idAct,actividades)
  }
  delAct(idAct:Actividad){
    return this.http.delete(this.URL_API+idAct)
  }

}
