import {Injectable} from "@angular/core";
import {Http, Headers, Request, RequestMethod, RequestOptions}	from "@angular/http";
import "rxjs/add/operator/toPromise";

import {ApiInfo}	from "./api-info";

import {Location}	from "./location";

@Injectable()
export class LocationsApiService{


	private locationAry:Location[] = [];

	constructor( private http:Http ){
		console.log("LocationApiService()");
	}

	getLocations(){
		let options = this.getOptions();
//		new RequestOptions({
//			headers: this.getHeaders()
//		});
		return this.http
					.get( ApiInfo.URI, options ).toPromise()
					.then( rsp => rsp.json() )
					.catch( this.handleError );
	}

	getLocationById(id:number){
		console.log("LocationApiService::getLocationById()", id );
		let options = this.getOptions();
//		new RequestOptions({
//			headers: this.getHeaders()
//		});
		return this.http.get( ApiInfo.URI + id, options ).toPromise()
					.then( rsp => rsp.json() )
					.catch( this.handleError );
	}


	addLocation( location:Location ){
		let options = this.getOptions();
//		new RequestOptions({
//			headers: this.getHeaders()
//		});
		return this.http.post( ApiInfo.URI, location, options ).toPromise()
					.then( rsp => rsp.json() )
					.catch( this.handleError );
	}

	updateLocation( location:Location ){
		let options = this.getOptions();
//		new RequestOptions({
//			headers: this.getHeaders()
//		});
		return this.http.put( ApiInfo.URI, location, options ).toPromise()
					.then()
					.catch( this.handleError );
	}

	removeLocation( id:number ){
		let opts = this.getOptions();
//			new RequestOptions({
//			headers: this.getHeaders()
//		});
		return this.http.delete( ApiInfo.URI + id, opts ).toPromise()
					.then( rsp => rsp.json() )
					.catch( this.handleError );
	}


	getOptions():RequestOptions{
		return new RequestOptions({
			headers: this.getHeaders()
		})
	}


	getHeaders():Headers{
		return new Headers({
			"Authorization": `TenantSecret ${ApiInfo.AUTH_ID},${ApiInfo.AUTH_KEY}`
		});
	}

	handleError(err){
		let msg = err.message ? err.message : err.status ? `${err.status}: ${err.statusText}` : "Unknown Server Error";
		console.error(msg);
		return Promise.reject(msg);
	}




}//LocationsApiService





