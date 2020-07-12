import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable ,throwError} from "rxjs";
import {catchError, map} from 'rxjs/operators';


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
 
    constructor(private http: HttpClient) {}
  
  
}