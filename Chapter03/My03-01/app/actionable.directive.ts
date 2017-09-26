import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
    selector: "[ywActionable]"
})
export class ActionableDirective{

    constructor( private element:ElementRef ){
        console.log("ActionableDirective()", element );
    }

    @HostListener('mouseenter') onMouseEnter(){
        this.setAppearance( "#aaa", "pointer", 7 );
    }

    @HostListener('mouseleave') onMouseLeave(){
        this.setAppearance( null, null, 0 );
    }


    setAppearance( color:string, cursor:string, degs ){
        let rotation:string = "rotate(" + degs + "degs)";
        console.log("ActionableDirective::setAppearance()", color, cursor, rotation );
        let style = this.element.nativeElement.style;
        style.backgroundColor = color;
        style.cursor = cursor;
        style.transform = rotation;
    }

}//ActionableDirective
