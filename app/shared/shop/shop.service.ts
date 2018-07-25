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
  public getShopsHavingProduct() {
    return null;
  }
}
