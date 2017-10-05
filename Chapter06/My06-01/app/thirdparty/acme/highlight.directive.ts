import {Directive, ElementRef, HostListener} from "@angular/core";
import {Input}  from "@angular/core"


@Directive({
  selector: "[acme-highlight]"
})
export class HighlightDirective{

    constructor( private element:ElementRef ){
        console.log("HighlightDirective()", this.element );
    }

//    initialColor:string;
    @Input("acme-highlight")
    bgColor:string;

    @Input("acme-cursor")
    overCursor:string;


    @HostListener("mouseenter")
    doMouseEnter(){
        console.log("HighlightDirective::doMouseEnter()");
        this.doStyle( this.bgColor, "pointer" );
    }

    @HostListener("mouseleave")
    doMouseLeave(){
        console.log("HighlightDirective::doMouseLeave()");
        this.doStyle( null, null );
    }



    doStyle( bgColor:string, pointer:string ){
        console.log("HighlightDirective::doStyle(), bg color", bgColor, ", cursor", pointer );
        this.element.nativeElement.style.backgroundColor = bgColor;
        this.element.nativeElement.style.cursor = pointer;
    }



}//HighlightDirective
