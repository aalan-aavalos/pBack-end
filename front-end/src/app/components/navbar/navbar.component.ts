import { Component } from '@angular/core';

import { AguasService } from '../../services/aguas.service';
import { PlacesService } from 'src/app/services/places.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  weatherData: any;
  
  latUse: any
  lonUse: any

  nombreLug?: string;
  agua?: string;
  aguaDesc?: string;
  tempCf?: string;
  tempMinCf?: string;
  tempMaxCf?: string;

  constructor(private aguasService: AguasService, private placesService:PlacesService) {}

  ngOnInit(): void {
    this.getWeather()
  }

  getWeather() {
    setTimeout(() =>{
      this.latUse = this.placesService.useLat
      this.lonUse = this.placesService.useLon
    
      console.log("Geo: " + this.latUse + ',' + this.lonUse)

      this.aguasService.getAguasS(this.latUse, this.lonUse).subscribe(
        (data: any) => {
          this.weatherData = data;
          
          this.nombreLug = this.weatherData.name;
          this.agua = this.weatherData.weather[0].main;
          this.aguaDesc = this.weatherData.weather[0].description;

          let tempC = this.weatherData.main.temp - 273.15;
          this.tempCf = tempC.toFixed(2);

          let tempMinC = this.weatherData.main.temp_min - 273.15;
          this.tempMinCf = tempMinC.toFixed(2);

          let tempMaxC = this.weatherData.main.temp_max - 273.15;
          this.tempMaxCf = tempMaxC.toFixed(2);
          
          console.log(this.weatherData);
        },
        error => {
          console.error('Error al obtener datos:  ', error);
        }        
      );
    }, 2000); 
  }  
}
