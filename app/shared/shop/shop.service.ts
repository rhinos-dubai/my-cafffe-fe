import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams,
} from "@angular/common/http";

import { Observable, BehaviorSubject ,throwError} from "rxjs";
import { map, catchError } from "rxjs/operators";

import { Config } from "~/shared/config";

import {ApolloModule, Apollo, QueryRef} from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import gql from 'graphql-tag';


//import { Product } from '~/shared/product/product';
//import { Shop } from '~/shared/shop/shop';
import { Product,Shop, Query } from '~/shared/types';
@Injectable()
export class ShopService {
  shopsRef: QueryRef<Query>;
  shops: Observable<Shop[]>;
  constructor(private apollo:Apollo) { }

  /*private AllShops = new Array<Shop>({
    id:1,
    name:"Starbucks",
    image:"~/images/shop.jpg",
    description:"123",
    location:{Lat:"123",Lng:"123"}
  },{
    id:1,
    name:"Costa",
    image:"~/images/caffe.jpg",
    description:"123",
    location:{Lat:"123",Lng:"123"}
  })*/



  getAllShops(){
    this.shopsRef = this.apollo.watchQuery<Query>({
      query: gql`
      { 
        getShops {
        name
        id
        products {
          id
          base_price
        	}
        }
      }
      `
    });

    this.shops = this.shopsRef
    .valueChanges
    .pipe(map(r => r.data.getShops))

    return this.shops;
  }

  getShopsNearme(){

  }
  getShopsHavingProduct(product:Product){

  }


}
