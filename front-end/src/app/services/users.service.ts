import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private URL_API='https://gitapirestprueba-production.up.railway.app/usuarios/';
  public user:User=
  {idUsr:0,usr:'',pwd:'',rol:''}
  users:User[]=[]

  constructor(private http: HttpClient) {}

  getUsr(){
    return this.http.get<User[]>(this.URL_API);
  }
}
