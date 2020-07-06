import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ITaxRates } from './taxRates';
import { ITaxedIncome } from './taxedIncome';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private localUrl:string = 'http://localhost:8000/';
  constructor(private http: HttpClient) { }

    getTaxRates():Observable<ITaxRates[]>{
      return this.http.get<ITaxRates[]>(this.localUrl);
    }

    calculateIncome(salary){
      console.log("salary", salary)
      return this.http.post<any>(this.localUrl,salary);
    }

    getPropertyTax(property_value){
      return this.http.post<any>(this.localUrl+"propertytax", property_value)
    }
}
