import { Injectable } from '@angular/core';
import { CartItem } from '../models/cart-item';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  existsCart(): boolean{
    return localStorage.getItem('cart') != null;
  }

  setCart(cart: CartItem[]): void{
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  getCart(): CartItem[]{
    const cartString = localStorage.getItem('cart');
    return cartString ? JSON.parse(cartString) : [];
    //return JSON.parse(localStorage.getItem('cart'));
  }

  clear(): void{
    localStorage.removeItem('cart');
  }
}