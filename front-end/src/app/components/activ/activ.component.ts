import { Actividad } from 'src/app/models/actividades';
import { ActividadesService } from 'src/app/services/actividades.service';
import { Component,OnInit,Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { LugaresService } from 'src/app/services/lugares.service';

@Component({
  selector: 'app-activ',
  templateUrl: './activ.component.html',
  styleUrls: ['./activ.component.css']
})
export class ActivComponent implements OnInit {

  constructor(public actividadService:ActividadesService, public userService:UsersService, public lugaresService:LugaresService){}
  
  ngOnInit(): void{
    this.getAct();
    this.getUsr();
    this.getLugar();
  }

  getLugar(){
    this.lugaresService.getLug().subscribe(
      (res)=>{
        this.lugaresService.lugares=res;
        console.log(res);
      },
      (error) => console.error()   
    );
  }

  getUsr(){
    this.userService.getUsr().subscribe(
        res=>{
        this.userService.users=res;
        console.log(res)
      },
    error=>console.log(error)
    )
  }

  getAct(){
    this.actividadService.getAct().subscribe(
        res=>{
        this.actividadService.actividades=res;
        console.log(res)
      },
    error=>console.log(error)
    )
  }

  formReset(form:NgForm){
    this.actividadService.actividad=form.value;
    form.reset();
  }
  
  visible:boolean=false;
  oculto:boolean=true;
  alerta:boolean=true;

  mostrar(){

    if (this.visible){
      this.visible=false;
      this.alerta=false;
    }
    else {
      this.visible=true
    }

  }
  Ocultar(){

    if (this.oculto){
      this.oculto=false;
    }
    else {
      this.oculto=true;
    }
  }

  Alerta(){
    if (this.alerta){
      this.alerta=false;
    }
    else {
      this.alerta=true;
    }
  }
}

