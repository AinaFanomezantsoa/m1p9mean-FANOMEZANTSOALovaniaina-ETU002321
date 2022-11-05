import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AppServiceService {

  constructor(private http : HttpClient) { }

  users() :Observable<any[]>{
    return this.http.get<any[]>('api/users');
  }

  restos() :Observable<any[]>{
    return this.http.get<any[]>('api/restos');
  }

  menus(): Observable<any[]>{
    return this.http.get<any[]>('api/menus');
  }
}
