import { Component,OnInit,Renderer2 } from '@angular/core';

import { NgForm } from '@angular/forms';

import { LoginService } from 'src/app/services/login.service';
import { Login } from 'src/app/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  constructor(public loginService:LoginService, private renderer: Renderer2){}
  
  ngOnInit(): void{
    this.getUsr();
  }

  getUsr(){
    this.loginService.getUsr().subscribe(
        res =>{
        this.loginService.loginn = res;
        console.log(res)
      },
    error=>console.log(error)
    )
  }

  
  valLog(form:NgForm){
    console.log('Aqui se debe de validar')
  }
  
  formReset(form:NgForm){
    this.loginService.login=form.value;
    form.reset();
  }
}
