import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProgressData {

  products=[
    {
      productId:"PRD-2024-001",
      name:"Product 1",
      quantity:"2000 units",
      estimatedDelivery:"xx/xx/xxxx",
      priority:"High",
      currentStage:1,
      stages:[
        { id: 1, name: 'Supplier', icon: 'package', locations: ['Supplier'] },
        { id: 2, name: 'Hub 1', icon: 'warehouse', locations: ['Hub 1','Hub 2'] },
        { id: 3, name: 'Depots', icon: 'truck', locations: ['Depo 1', 'Depo 2', 'Depo 3'] },
        { id: 4, name: 'Stores', icon: 'store', locations: ['Store 1', 'Store 2', 'Store 3', 'Store 4'] }
      ]
    },
    {
      productId:"PRD-2024-034",
      name:"Product 2",
      quantity:"1670 units",
      estimatedDelivery:"xx/xx/xxxx",
      priority:"Medium",
      currentStage:2,
      stages:[
        { id: 1, name: 'Supplier', icon: 'package', locations: ['Supplier'] },
        { id: 2, name: 'Hub 1', icon: 'warehouse', locations: ['Hub 1'] },
        { id: 3, name: 'Hub 2', icon: 'warehouse', locations: ['Hub 2','Hub 3'] },
        { id: 4, name: 'Depots', icon: 'truck', locations: ['Depo 1', 'Depo 2', 'Depo 3'] },
        { id: 5, name: 'Stores', icon: 'store', locations: ['Store 1', 'Store 2', 'Store 3', 'Store 4'] }
      ]
    },
    {
      productId:"PRD-2024-099",
      name:"Product 3",
      quantity:"1299 units",
      estimatedDelivery:"xx/xx/xxxx",
      priority:"Normal",
      currentStage:3,
      stages:[
        { id: 1, name: 'Supplier', icon: 'package', locations: ['Supplier'] },
        { id: 2, name: 'Hub 1', icon: 'warehouse', locations: ['Hub 1'] },
        { id: 3, name: 'Hub 2', icon: 'warehouse', locations: ['Hub 2'] },
        { id: 4, name: 'Depots', icon: 'truck', locations: ['Depo 1', 'Depo 2', 'Depo 3'] },
        { id: 5, name: 'Stores', icon: 'store', locations: ['Store 1', 'Store 2', 'Store 3', 'Store 4'] }
      ]
    },
    {
      productId:"PRD-2024-198",
      name:"Product 4",
      quantity:"789 units",
      estimatedDelivery:"xx/xx/xxxx",
      priority:"Medium-low",
      currentStage:4,
      stages:[
        { id: 1, name: 'Supplier', icon: 'package', locations: ['Supplier'] },
        { id: 2, name: 'Hub 1', icon: 'warehouse', locations: ['Hub 1'] },
        { id: 3, name: 'Hub 2', icon: 'warehouse', locations: ['Hub 2'] },
        { id: 4, name: 'Depots', icon: 'truck', locations: ['Depo 1'] },
        { id: 5, name: 'Stores', icon: 'store', locations: ['Store 1', 'Store 2', 'Store 3', 'Store 4'] }
      ]
    },
    {
      productId:"PRD-2024-201",
      name:"Product 5",
      quantity:"399 units",
      estimatedDelivery:"xx/xx/xxxx",
      priority:"Low",
      currentStage:5,
      stages:[
        { id: 1, name: 'Supplier', icon: 'package', locations: ['Supplier'] },
        { id: 2, name: 'Hub 1', icon: 'warehouse', locations: ['Hub 1'] },
        { id: 3, name: 'Hub 2', icon: 'warehouse', locations: ['Hub 2'] },
        { id: 4, name: 'Depots', icon: 'truck', locations: ['Depo 1'] },
        { id: 5, name: 'Stores', icon: 'store', locations: ['Store 1'] }
      ]
    }
  ];


  set(){
    return this.products;
  }


  
}
