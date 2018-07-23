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
  Ref: QueryRef<Query>;
  shops: Observable<Shop[]>;
  constructor(private apollo:Apollo) { }


  getAllShops(){
    this.Ref = this.apollo.watchQuery<Query>({
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

    this.shops = this.Ref
    .valueChanges
    .pipe(map(r => r.data.getShops))

    return this.shops;
  }

  getShopsNearme(){

  }
  getShopsHavingProduct(){
    this.Ref = this.apollo.watchQuery<Query>({
      query: gql`
      {
        getProduct(id:2){
          name,
          generic_properties{
            property
            id
          }
          shops{
            properties{
              generic_id
              price
              property
            }
            shop{
              name
              id
              isActive
            }
            base_price
            addons{
              addon
            }
          }
        }   
      } 
      `,
    });
    //console.log("SHops");
    this.shops = this.Ref
        .valueChanges
        .pipe(map(r =>{ console.log(r.data.getProduct.shops.filter(result => result.name === "c"))
        //r.data.getProduct.shops.filter(r => )
        return r.data.getProduct.shops}))
              //mergeMap(r => r.pipe(toArray())))
           //{ //console.log(r.data.getProduct);
           //return r.data.getProduct}),
              //catchError(this.handleErrors));
        

        return this.shops;
  }


}
