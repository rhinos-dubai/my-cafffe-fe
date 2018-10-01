import { Injectable } from "@angular/core";
import { Observable, BehaviorSubject} from "rxjs";
import { map, take } from "rxjs/operators";

import {Apollo, QueryRef } from "apollo-angular";

import gql from "graphql-tag";

import { Query, User } from "~/shared/types";

@Injectable()
export class UserService {
    public Ref: QueryRef<MutationCallback>;
    public user: Observable<User>;

    constructor(private apollo: Apollo) { }

    public RegisterUser(formData) {
        return this.apollo.mutate({
            mutation: gql`
            mutation {
                signUp(
                      f_name: "${formData.firstname}"
                      l_name: "${formData.lastname}"
                      email: "${formData.email}"
                      password: "${formData.password}"
                      phone: "1234"
                      gender: "M"
                      country: "Pakistan"
                      dob: "2018/11/14"
                      address: "dubai"
                ) {
                  id
                  user{
                    id
                    profile{
                      f_name
                      l_name
                      email
                      phone
                    }
                  }
                  token
                }
              } 
          `,
        });
    
        
      }

      public Login(formData) {

        return this.apollo.mutate({
          mutation: gql`
          mutation {
            localLogin(
              username: "${formData.email}"
              password: "${formData.password}"
            ){
              token
              id
              user{
                id
                profile{
                  f_name
                  l_name
                  email
                }
              }
            }
            
          }
        `,
      });

      }
}
