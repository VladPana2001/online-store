import { Component } from '@angular/core';
import { Gun } from '../shared/models/Gun';
import { ActivatedRoute, Router } from '@angular/router';
import { DisplayGunsService } from '../services/guns/display-guns.service';
import { CartService } from '../services/cart/cart.service';

@Component({
  selector: 'app-gun-page',
  templateUrl: './gun-page.component.html',
  styleUrl: './gun-page.component.css'
})
export class GunPageComponent {
  gun!: Gun;

  constructor(private activatedRoute: ActivatedRoute,
     private displayGunsService: DisplayGunsService,
      private cartService: CartService,
      private router: Router){
    activatedRoute.params.subscribe(params =>{
      if(params['id'])
      this.gun = displayGunsService.getGunbyId(params['id']);
    })
  }

  addToCart(){
    this.cartService.addToCart(this.gun);
    this.router.navigateByUrl('/cart-page');
  }
}
