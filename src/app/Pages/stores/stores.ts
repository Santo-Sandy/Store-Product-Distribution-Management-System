import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-stores',
  imports: [FormsModule,CommonModule],
  templateUrl: './stores.html',
  styleUrl: './stores.css',
})
export class Stores {
  
  searchText = '';

  stores = [
    {
      name: 'Store 1',
      city: 'Chennai',
      state: 'Tamil Nadu',
      manager: 'xxxxx xxxx',
      phone: '+91 xxxxx xxxxx',
      status: 'Active',
      hubs: [
        { name: 'Hub 1', city: 'Chennai' },
        { name: 'Hub 2', city: 'Chennai' }
      ],
      depots: [
        { name: 'Depot', city: 'Chennai' }
      ]
    },
    {
      name: 'Store 2',
      city: 'Hyderabad',
      state: 'Andhra Pradesh',
      manager: 'xxxxx xxxx',
      phone: '+91 xxxxx xxxxx',
      status: 'Active',
      hubs: [
        { name: 'Hub 1', city: 'Hyderabad' },
        { name: 'Hub 2', city: 'Hyderabad' }
      ],
      depots: [
        { name: 'Depot', city: 'Hyderabad' }
      ]
    },
    {
      name: 'Store 3',
      city: 'Bengaluru',
      state: 'Karnataka',
      manager: 'xxxxx xxxx',
      phone: '+91 xxxxx xxxxx',
      status: 'Active',
      hubs: [
        { name: 'Hub 1', city: 'Bengaluru' }
      ],
      depots: [
        { name: 'Depot 1', city: 'Bengaluru' },
        { name: 'Depot 2', city: 'Bengaluru' }
      ]
    }
  ];

  filteredStores() {
    return this.stores.filter(store =>
      store.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      store.city.toLowerCase().includes(this.searchText.toLowerCase()) 
    );
  }

}


