import { Component } from '@angular/core';

@Component({
  selector: 'app-cal',
  templateUrl: './cal.component.html',
  styleUrls: ['./cal.component.css']
})
export class CalComponent {
  title = 'aGeo';

  position = {
    lat: 21.168616391601283,
    lng: -100.93140713476811
  };

  label = {
    color: 'white',
    text: 'Auditorio UTNG'
  };
}
