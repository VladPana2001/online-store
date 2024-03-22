import { Component } from '@angular/core';
import { Category } from '../shared/models/Category';
import { DisplayGunsService } from '../services/guns/display-guns.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrl: './category.component.css'
})
export class CategoryComponent {
  categories: Category[] = [];

  constructor(private displayGunsService: DisplayGunsService){}

  ngOnInit(): void {
    this.categories = this.displayGunsService.getAllCategories();
    
  }

}
