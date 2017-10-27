import {Injectable} from "@@angular/core";

@Injectable()
export class UserAuthService{

	loggedInUser:string;
	rediredtUrl:string;

	login( username:string ){
		return new Promise(
			(resolve, reject) => {
				setTimeout( () => {
					this.loggedInUser = username;
					resolve();
				}, 1000 );
			}
		)
	}//login()


	logout(){
		return new Promise( (resolve, reject) => {
			setTimeout( () => {
				this.loggedInUser = null;
				this.rediredtUrl = null;
				resolve();
			}, 300 );
		});
	}//logout()




}//UserAuthService()
