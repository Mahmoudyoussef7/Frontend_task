import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environments';


@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  options = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
    })
  }
  constructor(private _http: HttpClient) {
  }

  Search(str:string,a:number,b:number) {
    //https://localhost:5001/api/Product?str=p&PageNumber=1&PageSize=2
    return this._http.get<any>(`${environment.serviceUrl}/Product?str=${str}&PageNumber=${a}&PageSize=${b}`,this.options);
  }

}
