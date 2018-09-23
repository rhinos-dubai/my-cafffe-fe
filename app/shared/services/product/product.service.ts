// tslint:disable-next-line:ordered-imports
import {
  HttpErrorResponse,
} from "@angular/common/http";
import { Injectable } from "@angular/core";

import { from, Observable, throwError, BehaviorSubject} from "rxjs";


import { catchError, groupBy, map, mergeMap, toArray, debounceTime } from "rxjs/operators";


import {Apollo, QueryRef} from "apollo-angular";


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

  private itemSource = new BehaviorSubject(0);
  currentItem = this.itemSource.asObservable();

  private itemName = new BehaviorSubject(null);
  currentItemName = this.itemName.asObservable();

  private selectedFilters = new BehaviorSubject([]);
  currentSelectedFilters = this.selectedFilters.asObservable();

  private PageNumber = new BehaviorSubject(1);
  currentPageNumber = this.PageNumber.asObservable();

  changeSelectedItemID(id: number) {
    this.itemSource.next(id)
  }

  changeSelectedItemName(name: string) {
    this.itemName.next(name);
  }

  changeSelectedFilters(filters: Array<any>) {
    this.selectedFilters.next(filters);
  }

  changePageNumber(pageNumberFromComponent: number){
    this.PageNumber.next(pageNumberFromComponent);
  }





  constructor(private apollo: Apollo) { }

   public getAllProducts() {
    this.Ref = this.apollo.watchQuery<Query>({
      query: gql`
      {
        getProducts{
          id
          name
          icon
          generic_properties{
            property
          }
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

  public getSelectedItem(id,filters,pageNumber) {
        this.Ref = this.apollo.watchQuery<Query>({
            query: gql`
        {
            getProduct(id:${id}){
              name
              id
              icon
              generic_properties {
                property_group
                property
                id
              }
          
              shops(
                includeInactive: false
                filters: [${filters}]
                perPage: 4
                paginate: true
                pageNumber: ${pageNumber}
              ) {
                pageNumber
                resultCount
                perPage
                result {
                  base_price
                  id
                  addons{
                    id
                    addon_group
                    addon
                    price
                  }
                  shop {
                    id
                    name
                    longitude
                    latitude
                    address
                    image {
                      secure_url
                    }
                  }
                  properties(includeInactive: false) {
                    generic_property {
                      id
                      property
                    }
                  }
                }
              }
            }
          }
        `,
      });
  
      this.product = this.Ref
        .valueChanges
        .pipe(debounceTime(1000),map(r => {
            //console.log(r.data.getProduct);
            // getLocationListWithItems(r.data.getShops);
            // console.log(r.data);
            // this.changeAvailableShops(r.data.getProduct.shops);
            return r.data.getProduct;
            
        }));
        
        return this.product
    }



  private handleErrors(error: HttpErrorResponse) {
    // console.log(error);
    return throwError(error);
  }
}
