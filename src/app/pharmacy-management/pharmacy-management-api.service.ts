import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable ,throwError} from "rxjs";
import {catchError, map} from 'rxjs/operators';
import {MedicineData} from './pharmacy-management.models';


@Injectable({
    providedIn: 'root'
  })
  export class PharmacyManagementAPIService {
    private headers = new HttpHeaders({
      "Content-Type": "application/json",
      "Cache-Control": "no-cache",
      "Pragma": "no-cache",
      "Access-Control-Allow-Origin": "*",
    });
    baseurl:string="https://localhost:5001/api/Medicine";
    constructor(private http: HttpClient) {}
  
    getMedicineByName(name: string): Observable<MedicineData[]> {
      return this.http.get<MedicineData[]>(
        this.baseurl,
        { params: {name:name}, headers: this.headers }
      );
    }
}