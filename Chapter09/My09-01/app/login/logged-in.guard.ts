import {Injectable} from "@angular/core";
import {CanActivate, Router} from "@angular/router";
import {ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import {UserAuthService} from "./user-auth.service";

@Injectable()
export class LoggedInGuard implements CanActivate{

	constructor(
		private authService:UserAuthService
		,private router:Router
	){}

	canActivate( route:ActivatedRouteSnapshot, routerState:RouterStateSnapshot ){
		if( this.authService.loggedInUser ){
			return true;
		}
		//cache the current/requested url on the router for redirect after login
		this.authService.rediredtUrl = routerState.url;
		this.router.navigate(["/login"]);
		return false;
	}


}//LoggedInGuard

