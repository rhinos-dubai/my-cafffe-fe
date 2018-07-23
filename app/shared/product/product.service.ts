import { Injectable, NgZone } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams,
} from "@angular/common/http";

import { Observable, BehaviorSubject ,throwError} from "rxjs";
import { map, catchError, groupBy, mergeMap, toArray } from "rxjs/operators";

import { Config } from "~/shared/config";
//import { Product } from '~/shared/product/product';

import {ApolloModule, Apollo, QueryRef} from 'apollo-angular';
import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';

import gql from 'graphql-tag';

import { Product,Shop, Query,Category } from '~/shared/types';
import { subscribe } from '../../../node_modules/@types/graphql';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient, private zone: NgZone, private apollo:Apollo) { }
  allItems:Array<Product>;
  Ref: QueryRef<Query>;
  //catergoryRef:QueryRef<Query>;
  categories:Observable<Category>;
  products: Observable<Product[]>;
  product: Observable<Product>;
  AllPosts:Array<any>;

  

   getAllProducts(){
    this.Ref = this.apollo.watchQuery<Query>({
      query: gql`
      { 
        getProducts {
        name
        id
        icon
        }
      }
      `,
    });
    
        this.products = this.Ref
        .valueChanges
        .pipe(map(r =>{ console.log(r.data.getProducts); return r.data.getProducts}),
              catchError(this.handleErrors))
        

        return this.products;

        

         //console.log(this.posts);
        //return  this.AllPosts;
       //return this.postsRef.valueChanges.subscribe(r => {console.log(r)});
    }

  getFavItems(): Product[] {
    return null;
  }

  getMostOrdered(): Product[] {
    return null;
  }

  getCategories(level:string){
    console.log("getCategories ==== "+level);
    this.Ref = this.apollo.watchQuery<Query>({
      query: gql`
      {
        getMainCategory(id:${level}) {
         id
         category
         products{
           name
           id
           generic_properties {
             property
             property_group
           }
         }
       }
     } 
      `,
    });

    this.categories = this.Ref.valueChanges
    .pipe(map(results =>{ console.log(results.data.getMainCategory); return results.data.getMainCategory}),
          catchError(this.handleErrors));

          //console.log(this.catergoryRef.valueChanges.subscribe())
          //console.log("getCategories ==== "+level);
          return this.categories;
          //return this.catergoryRef.valueChanges.subscribe(r => {console.log(r)});
  }
  getProduct(id:number){

    this.Ref = this.apollo.watchQuery<Query>({
      query: gql`
      {
        getProduct(id:${id}){
          name
          id
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
    console.log(id);
    this.product = this.Ref
        .valueChanges
        .pipe(map(r => { console.log(r.data.getProduct);  return r.data.getProduct}))
              //mergeMap(r => r.pipe(toArray())))
           //{ //console.log(r.data.getProduct);
           //return r.data.getProduct}),
              //catchError(this.handleErrors));
        

        return this.product;




    /*const params = new HttpParams();
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
    );*/
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
