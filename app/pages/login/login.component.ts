import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { SnackBar } from "nativescript-snackbar";
import * as ApplicationSettings from "application-settings";
import { UserService } from "~/shared/services/user/user.service"


@Component({
    moduleId: module.id,
    selector: "ns-login",
    templateUrl: "./login.component.html",
    styleUrls: ['./login.component.scss']

})
export class LoginComponent implements OnInit {

    public input: any;

    public constructor(private router: RouterExtensions, private userService: UserService) {
        this.input = {
            "email": "",
            "password": ""
        }
    }

    public ngOnInit() {
        if(ApplicationSettings.getBoolean("authenticated", false)) {
            this.router.navigate(["/secure"], { clearHistory: true });
        }
    }

    public login() {
        if(this.input.email && this.input.password) {
            //let account = JSON.parse(ApplicationSettings.getString("account", "{}"));
            if(this.input.email && this.input.password) {
                // ApplicationSettings.setBoolean("authenticated", true);
                // this.router.navigate(["/home"], { clearHistory: true });

                this.userService.Login(this.input).subscribe(result => {
                    console.log(result);
                    if(result.data.localLogin == null){
                        (new SnackBar()).simple("Incorrect Credentials!");
                    }
                    else {
                        (new SnackBar()).simple("Logging IN ...");
                        this.router.navigate(["/home"], { clearHistory: true });
                    }
                })
            } 
        } else {
            (new SnackBar()).simple("All Fields Required!");
        }
    }

}