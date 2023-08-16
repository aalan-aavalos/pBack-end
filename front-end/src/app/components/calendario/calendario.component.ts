import { Component,OnInit } from '@angular/core';
import * as moment from 'moment';
import { ActividadesService } from 'src/app/services/actividades.service';
import { Actividad } from 'src/app/models/actividades';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  eventInfoVisible: boolean = false;
  selectedEvent: any;

  week: any = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado"
  ];

  eventos: Actividad[] = [];
  monthSelect: any[] = [];
  dateSelect: any;
  dateValue: any= new Date();

  constructor(private actividadService:ActividadesService ) {

  }

  ngOnInit(): void {
    const fechaActual=new Date();
    const mes =fechaActual.getMonth();
    const año =fechaActual.getFullYear();
    this.getDaysFromDate(mes+1,año);
    this.getEventos();
    // console.log(this.eventos)
  }

  getEventos(): void{
    this.actividadService.getAct().subscribe(
        (res: Actividad[])=>{
        this.eventos=res;
        // console.log(this.eventos)
        // console.log(res)
      },
    error=>console.log(error)
    )
  }


  hasEvent(day: any): boolean {
    const monthYear = this.dateSelect.format('YYYY-MM');
    const parse = `${monthYear}-${day?.value.toString().padStart(2, '0')}`;
    return this.eventos.some(evento => evento.fecha.startsWith(parse));
  }
  
  hoy(day: any): boolean {
    const hoy = new Date();
    hoy.setDate(hoy.getDate() - 1);
    const diaStr = hoy.toISOString().slice(0, 10); // Obtener fecha actual en formato 'YYYY-MM-DD'
    const dia = `${diaStr}`;
    const monthYear = this.dateSelect.format('YYYY-MM');
    const parse = `${monthYear}-${day?.value.toString().padStart(2, '0')}`;
    console.log(hoy);
    console.log(parse)
  
    if (dia === parse) {
      return true;
    }
    return false;
  }
  

  getDaysFromDate(month: number, year: number) {

    const startDate = moment.utc(`${year}/${month}/02`)
    const endDate = startDate.clone().endOf('month')
    this.dateSelect = startDate;

    const diffDays = endDate.diff(startDate, 'days', true)
    const numberDays = Math.round(diffDays);

    const arrayDays = Object.keys([...Array(numberDays)]).map((a: any) => {
      a = parseInt(a)+1;
      const dayObject = moment(`${year}-${month}-${a+1}`);
      return {
        name: dayObject.format("dddd"),
        value: a,
        indexWeek: dayObject.isoWeekday()
      };
    });
    
    this.monthSelect = arrayDays;
  }

  changeMonth(flag: number) {
    if (flag < 0) {
      const prevDate = this.dateSelect.clone().subtract(1, "month");
      this.getDaysFromDate(prevDate.format("MM"), prevDate.format("YYYY"));
    } else {
      const nextDate = this.dateSelect.clone().add(1, "month");
      this.getDaysFromDate(nextDate.format("MM"), nextDate.format("YYYY"));
    }
  }

  clickDay(day: { value: any; }) {
    const monthYear = this.dateSelect.format('YYYY-MM')
    const parse = `${monthYear}-${day.value.toString().padStart(2, '0')}`
    const objectDate = moment(parse)
    this.dateValue = objectDate;
    // console.log(parse)

    // Buscar eventos para la fecha seleccionada
    const eventosDia = this.eventos.filter(evento => moment(evento.fecha).isSame(objectDate, 'day'))
    // console.log(eventosDia)

    // Mostrar la información del primer evento si hay eventos para este día
    if (eventosDia.length > 0) {
      this.eventInfoVisible = true;
      this.selectedEvent = eventosDia[0];
    } else {
      this.eventInfoVisible = false;
    }

    // console.log(day)
    // console.log(this.eventInfoVisible)

  }

  cerrarInfoEvent(){

    if (this.eventInfoVisible){
      this.eventInfoVisible=false;
    }
    else {
      this.eventInfoVisible=true;
    }
  }

}

