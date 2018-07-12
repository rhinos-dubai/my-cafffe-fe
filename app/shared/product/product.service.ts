import { Injectable, NgZone } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams,
} from "@angular/common/http";

import { Observable, BehaviorSubject ,throwError} from "rxjs";
import { map, catchError } from "rxjs/operators";

import { Config } from "~/shared/config";
import { Product } from '~/shared/product/product';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient, private zone: NgZone) { }
  allItems:Array<Product>;

  getCategories(level:number){
    
  }
  getProducts(category:number){
    const params = new HttpParams();
    params.append("sort", "{\"_kmd.lmt\": -1}");

    return this.http.get(Config.apiUrl, {
      headers: this.getCommonHeaders(),
      params,
    })
    .pipe(
      map((data: any[]) => {
        data.forEach((grocery) => {
          this.allItems.push(
            new Product(
              grocery.id,
              grocery.name,
              grocery.options || [],
              grocery.addons || []
            )
          );
           
        });
      }),
      catchError(this.handleErrors)
    );
  }

  private getCommonHeaders() {
    return new HttpHeaders({
      "Content-Type": "application/json",
      "Authorization": "Kinvey " + Config.token,
    });
  }

  private handleErrors(error: HttpErrorResponse) {
    console.log(error);
    return throwError(error);
  }


}
