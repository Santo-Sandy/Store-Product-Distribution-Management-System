import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { IntroCard } from "../../layouts/intro-card/intro-card";

@Component({
  selector: 'app-suppliers',
  imports: [FormsModule, CommonModule, RouterOutlet, IntroCard],
  templateUrl: './suppliers.html',
  styleUrl: './suppliers.css',
})
export class Suppliers {

  searchText='';

  suppliers=[
    {
      name:"Supplier 1",
      city:"Chennai",
      state:"Tamil Nadu",
      phone:"+91 xxxxx xxxxx",
      status:"Active",
      linkedhubs:[
        {name:"Hub 1", city:"Chennai"},
        {name:"Hub 2", city:"Chennai"}
      ],
    },
    {
      name:"Supplier 2",
      city:"Bengaluru",
      state:"Karnataka",
      phone:"+91 xxxxx xxxxx",
      status:"Inactive",
      linkedhubs:[
        {name:"Hub 1", city:"Bengaluru"},
        {name:"Hub 2", city:"Bengaluru"}
      ],
    }
  ];

  filteredsuppliers(){
    return this.suppliers.filter(supplier=>
      supplier.name.toLowerCase().includes(this.searchText.toLowerCase())||
      supplier.city.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

 

}
