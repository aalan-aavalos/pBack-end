import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-e-modal',
  templateUrl: './e-modal.component.html',
  styleUrls: ['./e-modal.component.css']
})
export class EModalComponent {
  @Input() amount: any;
  @Input() items: any;

  constructor(public activeModal: NgbActiveModal){}
}
