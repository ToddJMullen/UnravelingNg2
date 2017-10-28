import {Injectable}		from "@angular/core";
import {CanDeactivate}	from "@angular/router"

export interface DeactivatableComponent{
	allowLeave: () => boolean;
	confirmPrompt: () => string;
}

@Injectable()
export class CanDeavtivateGuard
	implements CanDeactivate<DeactivatableComponent>{


	canDeactivate( component: DeactivatableComponent ): boolean | Promise<boolean>{
		if( component.allowLeave() ){
			return true;
		}
		var prompt = component.confirmPrompt() || "Are you sure you want to discard these changes?";
		return new Promise<boolean>( resolve => {
			return resolve( window.confirm(prompt) );
		})
	}
}

