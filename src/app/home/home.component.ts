import { Component, OnInit, OnDestroy } from '@angular/core';
import { DisplayGunsService } from '../services/guns/display-guns.service';
import { Gun } from '../shared/models/Gun';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit{

  guns:Gun[] = [];
  constructor(private displayGunsService:DisplayGunsService, private route:ActivatedRoute){}

  ngOnInit(): void {

    

    this.route.params.subscribe(params =>{
      if(params['name'])
      {
        this.guns = this.displayGunsService.getAllGunsByCategory(params['name']);
      }
      else
        this.guns = this.displayGunsService.getAll();
    })
  }
}
