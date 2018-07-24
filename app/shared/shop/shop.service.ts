import { Injectable } from "@angular/core";
import { Observable} from "rxjs";
import { map } from "rxjs/operators";

import {Apollo, QueryRef} from "apollo-angular";

import gql from "graphql-tag";

import { Query, Shop } from "~/shared/types";

@Injectable()
export class ShopService {
  public Ref: QueryRef<Query>;
  public shops: Observable<Shop[]>;
  constructor(private apollo: Apollo) { }

  public getAllShops() {
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
      `,
    });

    this.shops = this.Ref
    .valueChanges
    .pipe(map((r) => r.data.getShops));

    return this.shops;
  }

  public getShopsNearme() {
    return null;
  }
  public getShopsHavingProduct(id) {
    this.Ref = this.apollo.watchQuery<Query>({
      query: gql`
      {
        getProduct(id:${id}){
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
    // console.log("SHops");
    this.shops = this.Ref
        .valueChanges
        .pipe(map((r) => r.data.getProduct.shops));

    return this.shops;

  }
}
