import { Login } from '../models/login';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  URL_API='http://localhost:3000/login/';
  public login:Login=
  { idUsr:0,usr:'',pwd:'',rol:''}

  loginn:Login[]=[]

  constructor(private http: HttpClient){}

  getUsr(){
    return this.http.get<Login[]>(this.URL_API)
  }

  valLog(loginn:Login){
    return this.http.post<Login[]>(this.URL_API+loginn.usr,loginn);
  }

  insUsr(loginn:Login){
    return this.http.post(this.URL_API,loginn)
  }
  updUsr(loginn:Login){
    return this.http.put(this.URL_API+loginn.idUsr,loginn)
  }
  delUsr(id:Login){
    return this.http.delete(this.URL_API+id)
  }
}
