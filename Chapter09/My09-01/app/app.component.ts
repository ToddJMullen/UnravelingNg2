import {Component} from '@angular/core';
import {Router} from "@angular/router";

import {UserAuthService} from "./login/user-auth.service";


@Component({
  selector: 'yw-app',
  templateUrl: 'app/app.template.html'
})
export class AppComponent {


	constructor(
		private authService: UserAuthService
		 ,private router:Router
	){}

	logout(){
		this.authService.logout();
		this.router.navigate(["/"]);
	}
}
