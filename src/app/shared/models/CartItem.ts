import { Gun } from "./Gun";

export class CartItem{
    constructor(gun:Gun){
        this.gun = gun;
        this.price;
    }

    gun:Gun;
    quantity:number = 1;

    get price():number{
        return this.gun.price * this.quantity;
    }
}