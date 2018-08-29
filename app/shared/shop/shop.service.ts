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
        getClosestShops(
          latitude: 33.3
          longitude: 32
          maxDistance: 10000
        ) {
          id
          name
          address
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
    this.Ref = this.apollo.watchQuery<Query>({
      query: gql`
      {
        getClosestShops(
          latitude: 33.3
          longitude: 32
          maxDistance: 10000
        ) {
          id
          name
          address
        }
      }   
      `,
    });

    this.shops = this.Ref
    .valueChanges
    .pipe(map((r) => {
      // console.log(r.data.getClosestShops);
      return r.data.getClosestShops;
    }));

    return this.shops;
  }
  public getShopsHavingProduct() {
    return null;
  }
}
