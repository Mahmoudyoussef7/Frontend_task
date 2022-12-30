import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environments';
import { map, Observable } from 'rxjs';


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

  public searchResults:any;

  Search(str:string,a:number,b:number):Observable<any> {
    //https://localhost:5001/api/Product?str=p&PageNumber=1&PageSize=10
    return this._http.get<any>(`${environment.serviceUrl}/Product?str=${str}&PageNumber=${a}&PageSize=${b}`);
  }

}
