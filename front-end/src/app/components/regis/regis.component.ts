import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActividadesService } from 'src/app/services/actividades.service';
import { ParticipantesService } from 'src/app/services/participantes.service';
import { CarreraService } from 'src/app/services/carrera.services';
import { AsistenciaService } from 'src/app/services/asistencia.service';
import { asistencia } from 'src/app/models/asistencia';
import { Participante } from 'src/app/models/Participantes';

@Component({
  selector: 'app-regis',
  templateUrl: './regis.component.html',
  styleUrls: ['./regis.component.css']
})
export class RegisComponent implements OnInit {

  participante:Participante[]=[];
  registros: asistencia[] = [];
  // nuevoRegistro: asistencia = { numCon: '', idAct: 0 };

  constructor(
    public actividadService: ActividadesService,
    public carreraService: CarreraService,
    public participanteService: ParticipantesService,
    public asistenciaService: AsistenciaService
  ) {}

  ngOnInit(): void {
    this.getAct();
    this.getPar();
    this.getCar();
  }

  getPar() {
    this.participanteService.getPar().subscribe(
      res => {
        this.participanteService.Participante = res;
        console.log(res);
      },
      error => console.log(error)
    );
  }

  getAct() {
    this.actividadService.getAct().subscribe(
      res => {
        this.actividadService.actividades = res;
        console.log(res);
      },
      error => console.log(error)
    );
  }

  getCar() {
    this.carreraService.getCar().subscribe(
      res => {
        this.carreraService.carreras = res;
        console.log(res);
      },
      error => console.log(error)
    );
  }

  insPar(form:NgForm){
    const numCon=form.value.numCon;
    const nomPar=form.value.nomPar;
    const idCar=form.value.idCar;
    const grupo=form.value.grupo;
    const existe = this.participante.some(participante =>
      participante.numCon === form.value.numCon
    )

    const infoPar = { numCon, nomPar, grupo, idCar };

    if (!existe){
      this.participanteService.insPar(infoPar).subscribe(
        res => {
          // this.getAsis();
          form.reset();
        },
        err => console.log(err)
      );
    }

  }

  agAsis(form: NgForm) {
    const numCon=form.value.numCon;
    const idAct=form.value.idAct;
    const existe = this.registros.some(registro =>
      registro.numCon === numCon && registro.idAct === idAct
    );

    const Asistencia = { numCon, idAct };

    if (!existe) {
      this.asistenciaService.agAsis(Asistencia).subscribe(
        res => {
          // this.getAsis();
          form.reset();
        },
        err => console.log(err)
      );
    } else {
      console.log("La inscripción ya existe");
    }
  }
}
