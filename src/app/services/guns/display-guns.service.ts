import { Injectable } from '@angular/core';
import { Gun } from '../../shared/models/Gun';
import { Category } from '../../shared/models/Category';
@Injectable({
  providedIn: 'root'
})
export class DisplayGunsService {

  constructor() { }

  getGunbyId(id: number): Gun{
    return this.getAll().find(gun => gun.id == id)!;
  }

  getAllCategories(): Category[] {
    const guns: Gun[] = this.getAll();
    const categoriesMap: Map<string, number> = new Map();

    guns.forEach(gun => {
      const category = gun.type;
      if (categoriesMap.has(category)) {
        categoriesMap.set(category, categoriesMap.get(category)! + 1);
      } else {
        categoriesMap.set(category, 1);
      }
    });

    let totalCount = 0;
    categoriesMap.forEach(count => {
      totalCount += count;
    });

    
    const categories: Category[] = [];
    categories.push({ name: 'All', count: totalCount });
    categoriesMap.forEach((count, name) => {
      categories.push({ name, count });
    });

    return categories;
  }


  getAllGunsByCategory(category: string):Gun[]{
    if(category == "All")
      return this.getAll();
    else
      return this.getAll().filter(gun => gun.type.includes(category));
  }


  getAll():Gun[]{
    const guns: Gun[] = [
      {
        id: 1,
        name: 'Anderson Rifles AR15',
        type: 'Rifle',
        caliber: '5.56mm',
        capacity: '30 rounds',
        weight: 3.402, 
        price: 999.99,
        tags: ['AR-15', 'Semi-automatic'],
        imageUrl: '/assets/images/Anderson Rifles AR15.jpg'
      },
      {
        id: 2,
        name: 'Browning 1911-380 Black Label',
        type: 'Pistol',
        caliber: '.380 ACP',
        capacity: '8 rounds',
        weight: 0.498, 
        price: 699.99,
        tags: ['1911', 'Compact'],
        imageUrl: '/assets/images/Browning 1911-380 Black Label.jpg'
      },
      {
        id: 3,
        name: 'Citadel CIT9MMCSP M-1911',
        type: 'Pistol',
        caliber: '9mm',
        capacity: '8 rounds',
        weight: 1.089, 
        price: 799.99,
        tags: ['1911', 'Full-size'],
        imageUrl: '/assets/images/Citadel CIT9MMCSP M-1911.jpg'
      },
      {
        id: 4,
        name: 'Norinco SKS',
        type: 'Rifle',
        caliber: '7.62x39mm',
        capacity: '10 rounds',
        weight: 3.992, 
        price: 499.99,
        tags: ['SKS', 'Semi-automatic'],
        imageUrl: '/assets/images/Norinco SKS.jpg'
      },
      {
        id: 5,
        name: 'Springfield XD(M) 45 ACP',
        type: 'Pistol',
        caliber: '.45 ACP',
        capacity: '13 rounds',
        weight: 0.878, 
        price: 599.99,
        tags: ['XD(M)', 'Full-size'],
        imageUrl: '/assets/images/Springfield XD(M) 45 ACP.jpg'
      }
    ];

    return guns;
  }
}


// '/assets/images/Anderson Rifles AR15.jpg',
// '/assets/images/Browning 1911-380 Black Label.jpg',
// '/assets/images/Citadel CIT9MMCSP M-1911.jpg',
// '/assets/images/Norinco SKS.jpg',
// '/assets/images/Springfield XD(M) 45 ACP.jpg'