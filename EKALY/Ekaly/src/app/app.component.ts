import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
  title = 'angular-app';
  users: any= [];
  restos: any=[];
  menus: any=[];
  age = 18;
  checked = false; 
  //true

  constructor(private service : AppServiceService, private router : Router){
  }
  ngOnInit(): void {
      this.usersFromAPI();
      this.restosFromAPI();
      this.menusFromAPI();
  }

  usersFromAPI(){
    this.service.users().subscribe(x => {
      this.users = x;
      console.log(x);
    })
  }

  restosFromAPI(){
    this.service.restos().subscribe(y =>{
      this.restos =y;
      console.log(y);
    })
  }

  menusFromAPI(){
    this.service.menus().subscribe(m =>{
      this.menus = m;
      console.log(m);
    })
  }

  /*redirectHome(){
    this.router.navigate(["/home"]);
  }

  redirectAbout(){
    this.router.navigate(["/about"]);
  }*/
}
