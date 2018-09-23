import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject} from "rxjs";
import { map, take } from "rxjs/operators";

import {Apollo, QueryRef} from "apollo-angular";

import gql from "graphql-tag";

import { Query, Shop } from "~/shared/types";

@Injectable()
export class ShopService {
  public Ref: QueryRef<Query>;
  public shops: Observable<Shop[]>;
  public shop:Observable<Shop>;

  private availableShops: BehaviorSubject<Array<any>>  = new BehaviorSubject([]);
  filteredShops: Observable<any> = this.availableShops.asObservable();

  private searchLocation = new BehaviorSubject(null);
  searchedLocation = this.searchLocation.asObservable();

  private seletedShop = new BehaviorSubject(null);
  SeletedShopName = this.seletedShop.asObservable();

  private selectedShopItemRate = new BehaviorSubject(0);
  currentShopItemRate = this.selectedShopItemRate.asObservable();
  pagninationItems: Array<any> = [];

  private isShopsAvailable = new BehaviorSubject(true);
  checkForAvailableShops = this.isShopsAvailable.asObservable();

  private totalLocations = new BehaviorSubject(0);
  checkforTotalLocations = this.totalLocations.asObservable();

  private Cafe = new BehaviorSubject([]);
  selectedCafe = this.Cafe.asObservable();

  changeCafe(cafeNow: Array<any>){
    this.Cafe.next(cafeNow);
  }


  changeTotalLocations(total: number){
    this.totalLocations.next(total);
  }

  changeShopsAvailbilityStatus(status:boolean){
    this.isShopsAvailable.next(status);
  }

  changeAvailableShops(shops: Array<any>){
    this.availableShops.next(shops);
  }

  addPagination(item) {
    const currentValue = this.availableShops.value;
    let updatedValue = [...currentValue, item];
    this.availableShops.next(updatedValue);
  }

  changesearchLocationStatus(status: boolean){
    this.searchLocation.next(status);
  }

  changeSeletedShopName(name: string){
    this.seletedShop.next(name);
  }

  changeRatebyShop(rate: number){
    this.selectedShopItemRate.next(rate);
  }


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
          perPage:10
          paginate:true
          pageNumber:1
        ) {
          id
          name
          address
          image{
            secure_url
          }
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


  public getShop(id){

    this.Ref = this.apollo.watchQuery<Query>({
      query: gql`
      {
        getShop(id:${id}) {
          id
          isActive
          name
          phone
          address
          image{
            secure_url
          }
          full_time
          opensAt
          closesAt
          longitude
          latitude
          shop_distance
          currency
          createdAt
          updatedAt

          products {
            id
            isActive
            product {
              name
              id
            }
          }
        }
      }
      `,
    });

    this.shops = this.Ref
    .valueChanges
    .pipe(map((r) => r.data.getShop));

    return this.shops;

  }
}
