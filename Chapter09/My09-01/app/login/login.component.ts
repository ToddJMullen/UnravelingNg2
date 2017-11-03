import {Component} from "@angular/core";
import {Router}	from "@angular/router";
import {UserAuthService}	from "./user-auth.service";

@Component({
	selector: "login"
	,templateUrl: "app/login/login.template.html"
})
export class LoginComponent{

	inProgress = false;

	constructor(
	public authService:UserAuthService
	 ,public router: Router
	){
		console.log("LoginComponent()")
	}


	login( userName: string){
		this.inProgress = true;
		this.authService
			.login( userName )
			.then( () => {
			let redirectUrl = this.authService.rediredtUrl ? this.authService.rediredtUrl : "/";
			this.router.navigate( [redirectUrl] );
			this.inProgress = false;
		})
	}//login()


	logout(){
		this.inProgress = true;
		this.authService
			.logout()
			.then( () => {
			this.inProgress = false;
		})
	}//logout()


}//LoginComponent

