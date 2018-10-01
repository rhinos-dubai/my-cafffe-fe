import { Component } from "@angular/core";
import { Location,  } from "@angular/common";
import { SnackBar } from "nativescript-snackbar";
import * as ApplicationSettings from "application-settings";
import { UserService } from "~/shared/services/user/user.service"

@Component({
  moduleId: module.id,
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  public input: any;

  public constructor(private userService: UserService, private location:Location) {
      this.input = {
          "firstname": "",
          "lastname": "",
          "email": "",
          "password": "",
          "phone": "1234",
		      "gender": "M",
		      "country": "Pakistan",
		      "dob": "2018/11/14",
		      "address": "dubai"
      }
  }

  public register() {
      // console.log(this.input);
      if(this.input.firstname && this.input.lastname && this.input.email && this.input.password) {
          /*ApplicationSettings.setString("account", JSON.stringify(this.input));
          this.location.back();*/
          // console.log(this.input);
          this.userService.RegisterUser(this.input).subscribe(result => {
              console.log("SignUP" , result.data.signUp);
              this.location.back();
          })
          //console.log(User);
      } else {
          (new SnackBar()).simple("All Fields Required!");
      }
  }

  public goBack() {
      this.location.back();
  }

}
