// tslint:disable-next-line:ordered-imports
import {
  HttpErrorResponse,
} from "@angular/common/http";
import { Injectable } from "@angular/core";

import { from, Observable, throwError} from "rxjs";

// import { from } from "rxjs/observable/from";

import { catchError, groupBy, map, mergeMap, toArray } from "rxjs/operators";

// import { Config } from "~/shared/config";
// import { Product } from '~/shared/product/product';

import {Apollo, QueryRef} from "apollo-angular";
// import {HttpLinkModule, HttpLink} from 'apollo-angular-link-http';
// import {InMemoryCache} from 'apollo-cache-inmemory';

import gql from "graphql-tag";

import { Category,  Product, Query  } from "~/shared/types";

@Injectable()
export class ProductService {
  public allItems: Product[];
  public Ref: QueryRef<Query>;
  // catergoryRef:QueryRef<Query>;
  public categories: Observable<Category>;
  public products: Observable<Product[]>;
  public product: Observable<any>;
  public genericProperties;
  public AllPosts: any[];
  public genereic: any[] = [];
  constructor(private apollo: Apollo) { }

   public getAllProducts() {
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
        .pipe(map((r) => r.data.getProducts),
              catchError(this.handleErrors));

    return this.products;

         // console.log(this.posts);
        // return  this.AllPosts;
       // return this.postsRef.valueChanges.subscribe(r => {console.log(r)});
    }

    public getFavItems(): Product[] {
    return null;
  }

  public getMostOrdered(): Product[] {
    return null;
  }

  public getCategories(level: string) {
    // console.log("getCategories ==== "+level);
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
    .pipe(map((results) => results.data.getMainCategory),
          catchError(this.handleErrors));

          // console.log(this.catergoryRef.valueChanges.subscribe())
          // console.log("getCategories ==== "+level);
    return this.categories;
          // return this.catergoryRef.valueChanges.subscribe(r => {console.log(r)});
  }
  public getProduct(id: number, filters: number[]) {
    // tslint:disable-next-line:no-console
    console.log(filters);
    this.Ref = this.apollo.watchQuery<Query>({
      query: gql`
      {
        getProduct(id:${id}){
          name
          id
    generic_properties {
      id
      property
      property_group
    }
    shops(
      includeInactive:true
      filters:${filters}
    ) {
      base_price
      addons(includeInactive: false) {
        addon
      }
      properties(includeInactive: true) {
        property_group
        property
        generic_id
      }
      shop {
        id
        name
        longitude
        latitude
      }
    }
  }
}
      `,
      // tslint:disable-next-line:object-literal-sort-keys
      fetchPolicy: "network-only",
      pollInterval: 1000,
    });
    // console.log(id);
    this.product = this.Ref
        .valueChanges
        .pipe(map((r) =>  r.data.getProduct),
      );

    return this.product;
  }

  public groupItems(id: number, filters: number[]) {
    this.Ref = this.apollo.watchQuery<Query>({
      query: gql`
      {
        getProduct(id:${id}){
          name
          id
    generic_properties {
      id
      property
      property_group
    }
    shops(
      includeInactive:true
      filters:${filters}
    ) {
      base_price
      addons(includeInactive: false) {
        addon
      }
      properties(includeInactive: true) {
        property_group
        property
        generic_id
      }
      shop {
        id
        name
        longitude
        latitude
      }
    }
  }
}
      `,
      // tslint:disable-next-line:object-literal-sort-keys
      fetchPolicy: "network-only",
      pollInterval: 1000,
    });

    // console.log(id);
    this.genericProperties = this.Ref
        .valueChanges
        .pipe(map((r) =>  {
          const source = from(r.data.getProduct.generic_properties);
          const example = source.pipe(
            groupBy((result) => {
              return result.property_group; }),
              mergeMap((group) => group.pipe(toArray())),
          );
          // tslint:disable-next-line:no-console
          const subscribe = example.subscribe((val) => console.log(val));
          return subscribe ; }),
      );

    // tslint:disable-next-line:no-console
    return this.genericProperties;
  }

  /* private getCommonHeaders() {
    return new HttpHeaders({
      "Authorization": "Kinvey " + Config.token,
      "Content-Type": "application/json",
    });
  } */

  private handleErrors(error: HttpErrorResponse) {
    // console.log(error);
    return throwError(error);
  }
}
