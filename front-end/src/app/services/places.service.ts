import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  public useLocation?: [number, number];
  public useLat?: any
  public useLon?: any

  constructor() {
    this.getUserLocation();
  }

  public getUserLocation(){
    navigator.geolocation.getCurrentPosition(
      ({coords})=>{
        this.useLocation = [coords.latitude, coords.longitude];
        this.useLat = coords.latitude
        this.useLon = coords.longitude
      }
    );
  }
}
