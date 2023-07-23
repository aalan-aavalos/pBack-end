import { Component } from '@angular/core';

import { NgForm } from '@angular/forms';

import { LoginService } from 'src/app/services/login.service';
import { Login } from 'src/app/models/login';

import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{

  constructor(public loginService:LoginService, private router: Router){
  }
  
  ngOnInit(): void{
  }

  valLog(form:NgForm){
    console.log('Validando...')

    this.loginService.valLog(form.value).subscribe(
      res=> {
        
        if(res.length == 0){
          console.log('Mal');
          form.reset();
        }
        else{
          console.log('Sesion iniciada')
          if(res[0].rol == 'adm'){
            console.log('admin');
            this.router.navigate(['home-usr']);
          }else{
            console.log('usr');
            this.router.navigate(['home-adm']);
          }
        }

        console.log(res)
      },
      err=> {
        console.log('Error al iniciar' + err)
      }
    )}
  
  formReset(form:NgForm){
    this.loginService.login=form.value;
    form.reset();
  }
}
