import { Actividad } from 'src/app/models/actividades';
import { ActividadesService } from 'src/app/services/actividades.service';
import { Component,OnInit,Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-activ',
  templateUrl: './activ.component.html',
  styleUrls: ['./activ.component.css']
})
export class ActivComponent implements OnInit {

  constructor(public actividadService:ActividadesService, public userService:UsersService){}
  
  ngOnInit(): void{
    this.getAct();
    this.getUsr();
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
  insAct(form:NgForm){
    if(form.value.idAct && form.value.idAct!==0){
      const resp= confirm('¿Guardar Cambios?');
      console.log('Actualizando')
      this.actividadService.updAct(form.value).subscribe(
       res=> console.log(res),
       error=> console.log(error)
      );
    }else{
   this.actividadService.insAct(form.value).subscribe(
     res=> {
       this.getAct();
       form.reset();
     },
     err=> console.log(err)
   )}
  }
  updAct( actividad:Actividad){
    this.actividadService.actividad= actividad;
  }
  delAct(id:any){
    const resp= confirm('¿Estas seguro de eliminar esta actividad?');
    console.log('eliminando');
    if(resp){
      this.actividadService.delAct(id).subscribe(
       (res)=>{
         this.getAct();
       },
       (err)=> console.log(err)
      );
    }
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

