import { Component, OnInit } from '@angular/core';
import { PlacesService } from 'src/app/services/places.service';
import { icon, Map, marker, routing, tileLayer, latLng } from 'leaflet';
import 'leaflet-routing-machine';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  constructor(private placesService:PlacesService){}

  geo:any;
  map:any;
  
  ngOnInit(){
    setTimeout(() =>{
      this.geo = this.placesService.useLocation;
    }, 2000); 
  }

  ngAfterViewInit(){
    setTimeout(() => {
      this.map = new Map('map').setView(this.geo, 13);

      tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(this.map);
      
    },2000);
  }

    a:any = 2;

  ubicar(){
    setTimeout(() => {
      /**
       * PARA CAMBIAR EL ICONO
       * const myIcon = icon({
       * iconUrl:'/assets/',
       * iconSize:[25,41]
       * }),
       */
      
      //marker(this.geo, {icon:myIcon}).addTo(this.map).bindPopup("<strong>Esta es mi ubicación</strong>").openPopup(); 

      
      marker(this.geo).addTo(this.map).bindPopup("<strong>Esta es mi ubicación</strong>").openPopup(); 

      if(this.a == 1){
        marker([21.16760564090466, -100.9295686333674]).addTo(this.map).bindPopup("<strong>Cancha UTNG</strong>").openPopup();
      }
      else if(this.a == 2){
        marker([21.16860141641717, -100.93142280682983]).addTo(this.map).bindPopup("<strong>Auditorio UTNG</strong>").openPopup();
      }
      else{
        marker([21.167347898560337, -100.93122052054386]).addTo(this.map).bindPopup("<strong>UTNG</strong>").openPopup();
        
      }
      
      
      let waypoints:any = [];


      //Compara si la variable a es igua a una para poner la ubicacion
      if (this.a == 1) {
        waypoints = [
          latLng(this.geo),
          latLng([21.16760564090466, -100.9295686333674]) //Cancha
        ];
      } 
      else if (this.a == 2) {
        waypoints = [
          latLng(this.geo),
          latLng([21.16860141641717, -100.93142280682983]) //Aditorio
        ];      
      }
      else{
        latLng(this.geo),
        latLng([21.167347898560337, -100.93122052054386]) //UTNG
      }
      routing.control({
        waypoints: waypoints
      }).addTo(this.map);
    })
  }

  recargar(){
    location.reload();
  }
}
