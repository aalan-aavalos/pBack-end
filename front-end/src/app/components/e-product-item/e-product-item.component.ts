import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-e-product-item',
  templateUrl: './e-product-item.component.html',
  styleUrls: ['./e-product-item.component.css']
})
export class EProductItemComponent {
  @Input() product!: Product;

  constructor(private messageService: MessageService){}

  ngOnInit(): void{
  }
  
  addToCart(): void{
    console.log('enviando...')
    this.messageService.sendMessage(this.product);
  }
}
