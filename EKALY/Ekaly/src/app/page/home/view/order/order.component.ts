import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from 'src/app/app-service.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  menus: any=[];
  restos: any=[];

  constructor(private service: AppServiceService, private router: Router) {
   }

  ngOnInit(): void {
    this.menusFromAPI();
    this.restoFromAPI();
  }

  menusFromAPI(){
    this.service.menus().subscribe(x =>{
      this.menus = x;
      console.log(x);
    })
  }

  restoFromAPI(){
    this.service.restos().subscribe(x =>{
      this.restos = x;
      console.log(x);
    })
  }

}
