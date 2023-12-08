import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { asistencia } from '../models/asistencia';
@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {
  URL_API='https://gitapirestprueba-production.up.railway.app/asistencia/';
  public asistencia:asistencia={idAsi:0,numCon:'',idAct:''}

  asistencias:asistencia[]=[];

  constructor(private http: HttpClient) { }
  getAsis(){
    return this.http.get<asistencia[]>(this.URL_API)
  }

  agAsis(asistencia:asistencia){
    return this.http.post(this.URL_API,asistencia)
  }
}