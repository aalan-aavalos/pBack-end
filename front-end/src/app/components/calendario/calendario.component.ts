import { Component,OnInit } from '@angular/core';
import * as moment from 'moment';
import { ActividadesService } from 'src/app/services/actividades.service';
import { Actividad } from 'src/app/models/actividades';

//Mapa
import { PlacesService } from 'src/app/services/places.service';
import { icon, Map, marker, routing, tileLayer, latLng, Layer } from 'leaflet';
import 'leaflet-routing-machine';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {
  constructor(private actividadService:ActividadesService, private placesService:PlacesService){}

  //Calendario
  eventInfoVisible: boolean = false;
  selectedEvent: any;

  //Mapa
  geo:any;
  map:any;

  ngOnInit(): void {
    //Calendario
    const fechaActual=new Date();
    const mes =fechaActual.getMonth();
    const año =fechaActual.getFullYear();

    this.getDaysFromDate(mes+1,año);
    this.getEventos();

    //console.log(this.eventos) No borroar creo que puede servir

    //Mapa
    setTimeout(() =>{
      this.geo = this.placesService.useLocation;
    }, 2000); 
  }

  ngAfterViewInit(){
    setTimeout(() => {
      //Mapa
      this.map = new Map('map').setView(this.geo, 13);

      tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);
    },2000);
  }

  //Calendario
  week: any = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    
  ];

  //Calendario
  eventos: Actividad[] = [];
  monthSelect: any[] = [];
  dateSelect: any;
  dateValue: any= new Date();

  //Calendario
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

  //Calendario
  hasEvent(day: any): boolean {
    const monthYear = this.dateSelect.format('YYYY-MM');
    const parse = `${monthYear}-${day?.value.toString().padStart(2, '0')}`;
    return this.eventos.some(evento => evento.fecha.startsWith(parse));
  }
  
  //Calendario
  hoy(day: any): boolean {
    const hoy = new Date();
    hoy.setDate(hoy.getDate() - 1);
    const diaStr = hoy.toISOString().slice(0, 10); // Obtener fecha actual en formato 'YYYY-MM-DD'
    const dia = `${diaStr}`;
    const monthYear = this.dateSelect.format('YYYY-MM');
    const parse = `${monthYear}-${day?.value.toString().padStart(2, '0')}`;
    //console.log(hoy);
    //console.log(parse)
  
    if (dia === parse) {
      return true;
    }
    return false;
  }
  
  //Calendario
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

  //Calendario
  changeMonth(flag: number) {
    if (flag < 0) {
      const prevDate = this.dateSelect.clone().subtract(1, "month");
      this.getDaysFromDate(prevDate.format("MM"), prevDate.format("YYYY"));
    } else {
      const nextDate = this.dateSelect.clone().add(1, "month");
      this.getDaysFromDate(nextDate.format("MM"), nextDate.format("YYYY"));
    }
  }

  //Calendario
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
      console.log("Lugar:" + this.selectedEvent?.idLug)// Esto te va a servir
    } else {
      this.selectedEvent = eventosDia[0];
      console.log(this.selectedEvent?.idLug)
      
      this.eventInfoVisible = false;
    }
     //console.log(day.value)
    // console.log(this.eventInfoVisible)
  }
  
  //Calendario
  cerrarInfoEvent(){
    if (this.eventInfoVisible){
      this.eventInfoVisible=false;
    }
    else {
      this.eventInfoVisible=true;
    }
  }

  //Mapa
  ubicar(){
    
    setTimeout(() => {
      
      marker(this.geo).addTo(this.map).bindPopup("<strong>Esta es mi ubicación</strong>").openPopup(); 
      
      

      /**
      if(this.selectedEvent?.idLug == 1){
        marker([21.16760564090466, -100.9295686333674]).addTo(this.map).bindPopup("<strong>Cancha de futbol</strong>").openPopup();
      }
      else if(this.selectedEvent?.idLug == 2){
        marker([21.16860141641717, -100.93142280682983]).addTo(this.map).bindPopup("<strong>Auditorio UTNG</strong>").openPopup();
      }
      else{
        marker([21.167347898560337, -100.93122052054386]).addTo(this.map).bindPopup("<strong>UTNG</strong>").openPopup(); 
      }
      */

      //console.log(this.selectedEvent?.idLug)
      console.log(this.clickDay)
      
      switch(this.selectedEvent?.idLug){
        case 1:
          marker([21.167575803811204, -100.92955694665577]).addTo(this.map).bindPopup("<strong>Cancha de futbol</strong>").openPopup()
          
          break;
        case 2:
          marker([21.168624220198005, -100.93141169411481]).addTo(this.map).bindPopup("<strong>Auditorio UTNG</strong>").openPopup();
          break;
        case 3:
          marker([21.168599098412418, -100.93143200509338]).addTo(this.map).bindPopup("<strong>Cancha de Basket</strong>").openPopup();
          break;
        case 4:
          marker([21.167575803811204, -100.92955694665577]).addTo(this.map).bindPopup("<strong>Pista de atletismo</strong>").openPopup();
          break;
        case 5:
          marker([21.168624220198005, -100.93141169411481]).addTo(this.map).bindPopup("<strong>Sala deTaekwondo</strong>").openPopup();
          break;
        case 6:
          marker([21.168624220198005, -100.93141169411481]).addTo(this.map).bindPopup("<strong>Gimanasio </strong>").openPopup();
          break;
        default:
          
          marker([21.167347898560337, -100.93122052054386]).addTo(this.map).bindPopup("<strong>UTNG</strong>").openPopup(); 
          
          break;
      }
      
      
      
      let waypoints:any = [];

      switch(this.selectedEvent?.idLug){
        case 1:
          waypoints = [
            latLng(this.geo),
            latLng([21.167575803811204, -100.92955694665577]) //Cancha
          ];
          break;
        case 2:
          waypoints = [
            latLng(this.geo),
            latLng([21.168624220198005, -100.93141169411481]) //Aditorio
          ];
          break;
        case 3:
          waypoints = [
            latLng(this.geo),
            latLng([21.168599098412418, -100.93143200509338]) //Basket
          ];
          break;
        case 4:
          waypoints = [
            latLng(this.geo),
            latLng([21.167575803811204, -100.92955694665577]) //Atletismo
          ];
          break;
        case 5:
          waypoints = [
            latLng(this.geo),
            latLng([21.168624220198005, -100.93141169411481]) //Take kuan do
          ];
          break;
        case 6:
          waypoints = [
            latLng(this.geo),
            latLng([21.168624220198005, -100.93141169411481]) //Gimnacio
          ];
          break;
        default:
          waypoints = [
            latLng(this.geo),
            latLng([21.167347898560337, -100.93122052054386]) //UTNG
          ];
          break;
      }

      /** 
      //Compara si la variable a es igua a una para poner la ubicacion
      if (this.selectedEvent?.idLug == 1) {
        waypoints = [
          latLng(this.geo),
          latLng([21.16760564090466, -100.9295686333674]) //Cancha
        ];
      } 
      else if (this.selectedEvent?.idLug == 2) {
        waypoints = [
          latLng(this.geo),
          latLng([21.16860141641717, -100.93142280682983]) //Aditorio
        ];      
      }
      else{
        waypoints = [
          latLng(this.geo),
          latLng([21.167347898560337, -100.93122052054386]) //UTNG
        ];
      }
      **/
      routing.control({
        waypoints: waypoints
      }).addTo(this.map);
      
    })
    
  }

  //Mapa
  recargar(){
    location.reload();
  }
}