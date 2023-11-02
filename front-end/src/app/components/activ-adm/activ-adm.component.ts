import { Actividad } from 'src/app/models/actividades';
import { ActividadesService } from 'src/app/services/actividades.service';
import { Component,OnInit,Renderer2 } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { LugaresService } from 'src/app/services/lugares.service';
import { HttpClient } from '@angular/common/http';

// Define la interfaz para la respuesta de Facebook
interface FacebookResponse {
  // Define las propiedades de la respuesta que necesitas
  status: number;
  // Otras propiedades si es necesario
}

@Component({
  selector: 'app-activ-adm',
  templateUrl: './activ-adm.component.html',
  styleUrls: ['./activ-adm.component.css']
})
export class ActivAdmComponent implements OnInit{
  constructor(public actividadService:ActividadesService, public userService:UsersService, public lugaresService:LugaresService, private client: HttpClient){}

  ngOnInit(): void{
    this.getAct();
    this.getUsr();
    this.getLugar();
  }

  createMensajeActividad(actividad: Actividad, mensajePersonalizado: string): string {
    const fecha = actividad.fecha;
    const nombre = actividad.nomAct;
    const responsable = actividad.usr;
    const lugar = actividad.nomLug;
    const descripcion = actividad.descripcion;
  
    const mensaje = `${mensajePersonalizado}\nFecha: ${fecha}\nNombre: ${nombre}\nResponsable: ${responsable}\nLugar: ${lugar}\nDescripción: ${descripcion}`;
  
    return mensaje;
  }
  
  public confirmarPublicacion(actividad: Actividad) {
    const confirmacion = window.confirm('¿Estás seguro de publicar esta actividad?');
  
    if (confirmacion) {
      this.publicarPublicacion(actividad);
    }
  }
  
  publicarPublicacion(actividad: Actividad) {
    const mensajePersonalizado = 'Se ha registrado una nueva actividad:';
    const mensaje = this.createMensajeActividad(actividad, mensajePersonalizado);
    const access_token = 'EAAMbJNs6S24BOwaKcqSMvDMwIYUjZBSLNAPNtQ97RTP6ZBu8VJkg0dCUM7dNVqI9rtZAf1GFtKLfv9yY7WSykYI2cZCeCpfcYLZChFegLUAS1dA8ldnvq0cuFCWgwmWMrDS5WZCKz09ZBcdHWdlVRKTfTtuDSxjpxL18HZBXBQSEGEoNHZBuT1XvulktZCbud9JL0ZD';
  
    const data = {
      message: mensaje,
      access_token: access_token
    };
  
    this.client.post<FacebookResponse>("https://graph.facebook.com/131556816715104/feed", data)
      .subscribe((response: FacebookResponse) => {
        if (response && response.status === 200) {
          console.log('La publicación se realizó correctamente.');
        } else {
          console.error('Ocurrió un error al publicar la entrada.');
        }
      });
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
