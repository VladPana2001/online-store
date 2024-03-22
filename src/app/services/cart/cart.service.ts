import { Injectable } from '@angular/core';
import { Cart } from '../../shared/models/Cart';
import { Gun } from '../../shared/models/Gun';
import { CartItem } from '../../shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = new Cart();
  constructor() { }

  addToCart(gun: Gun):void{
    let cartItem = this.cart.items.find(item => item.gun.id === gun.id);

    if(cartItem){
      this.changeQuantity(gun.id, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(gun));
  }

  removeFromCart(gunId:number): void{
    this.cart.items = this.cart.items.filter(item => item.gun.id != gunId);
  }

  changeQuantity(gunId:number, quantity: number){
    let cartItem = this.cart.items.find(item => item.gun.id === gunId);
    if(!cartItem) return;

    cartItem.quantity = quantity;
  }

  getCart():Cart{
    return this.cart;
  }

  clearCart(){
    this.cart.items = [];
  }

}
