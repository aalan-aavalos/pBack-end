import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //Se puede llenar este arreglo con datos de una base de datos
  products: Product[] = [
    new Product(1, 'Bic negro', 'Es negro', 5.99, 'https://m.media-amazon.com/images/S/aplus-media/vc/c4bf8a36-2821-40e9-8745-8c1360347abb._SL300__.jpg'),
    new Product(2, 'Bic azul', 'Es azul', 5.99, 'https://cdn.pacifiko.com/image/cache/catalog/125%20--%209006%20(3)-1000x1000.jpg'),
    new Product(3, 'Folder amarillo', 'Es un folder amarillo', 3.99, 'https://m.media-amazon.com/images/I/41WJ4pZ6DBL.__AC_SX300_SY300_QL70_ML2_.jpg'),
    new Product(4, 'Folder azul', 'Es un folder azul', 3.99, 'https://m.media-amazon.com/images/I/61aOpGfumPL.__AC_SX300_SY300_QL70_ML2_.jpg'),
    new Product(5, 'Folder negro', 'Es un folder negro', 3.99, 'https://m.media-amazon.com/images/I/61NoAKFq3XL._AC_SX679_.jpg'),
    new Product(6, 'Folder verde', 'Es un folder verde', 3.99, 'https://m.media-amazon.com/images/I/4153CxIfleL._AC_SX679_.jpg'),
  ]

  constructor() { }
  
  getProducts(): Product[]{
    return this.products;
  }
}
