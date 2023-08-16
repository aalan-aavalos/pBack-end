import { Injectable } from '@angular/core';
import { Participante } from '../models/Participantes';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ParticipantesService{
  URL_API='http://localhost:3000/participantes/';
  public participante:Participante=
  { numCon:0,nomPar:'',grupo:'',idCar:0}

  Participante:Participante[]=[]

  constructor(private http: HttpClient){}

  getPar(){
    return this.http.get<Participante[]>(this.URL_API)
  }

  insPar(participante:Participante){
    return this.http.post(this.URL_API,participante)
  }
  updPar(participante:Participante){
    return this.http.put(this.URL_API+participante.numCon,participante)
  }
  delPar(numCon:Participante){
    return this.http.delete(this.URL_API+numCon)
  }
}