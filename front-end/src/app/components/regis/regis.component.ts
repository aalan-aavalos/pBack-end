import { Component,OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActividadesService } from 'src/app/services/actividades.service';
import {ParticipantesService} from 'src/app/services/participantes.service';
import { CarreraService } from 'src/app/services/carrera.services';

@Component({
  selector: 'app-regis',
  templateUrl: './regis.component.html',
  styleUrls: ['./regis.component.css']
})
export class RegisComponent implements OnInit{

  constructor(public actividadService:ActividadesService, 
              public carreraService:CarreraService, 
              public participantesService:ParticipantesService){}

  ngOnInit(): void {
    this.getAct();
    this.getCar();
    this.getPar();
  }

  getPar(){
    this.participantesService.getPar().subscribe(
        res=>{
        this.participantesService.Participante=res;
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

  getCar(){
    this.carreraService.getCar().subscribe(
        res=>{
        this.carreraService.carreras=res;
        console.log(res)
      },
    error=>console.log(error)
    )
  }

  agAsist(form:NgForm){
    if(form.value.idPar)
  }
}
