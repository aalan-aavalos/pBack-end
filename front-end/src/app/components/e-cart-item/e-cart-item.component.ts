import { Component, Input } from '@angular/core';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-e-cart-item',
  templateUrl: './e-cart-item.component.html',
  styleUrls: ['./e-cart-item.component.css']
})
export class ECartItemComponent {
  @Input() cartItemm!: CartItem;
}
