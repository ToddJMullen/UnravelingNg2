import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: "[ywActionable]"
})
export class ActionableDirective{

    constructor( private element:ElementRef ){
        console.log("ActionableDirective()", element );
    }

    @HostListener('mouseenter') onMouseEnter(){
        this.setAppearance( "#aaa", "pointer" );
    }

    @HostListener('mouseleave') onMouseLeave(){
        this.setAppearance( null, null );
    }


    setAppearance( color:string, cursor:string ){
//        console.log("ActionableDirective::setAppearance()", color, cursor );
        let style = this.element.nativeElement.style;
        style.backgroundColor = color;
        style.cursor = cursor;
    }

}//ActionableDirective
