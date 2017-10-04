import {Directive, ElementRef, HostListener} from "@angular/core";
import {Input}  from "@angular/core"

@Directive({
  selector: "[addHighlight]"
})
export class HighlightDirective{

//    initialColor:string;
    @Input("addHighlight")
    hoverColor:string;
    @Input("cursor")
    mousePointer:string;


    constructor( private elem:ElementRef ){
        console.log("HighlightDirective()", this.elem );
//        this.initialColor = this.elem.nativeElement.style.backgroundColor;
    }



    @HostListener("onmouseenter")
    doMouseEnter(){
       this.setStyle( this.hoverColor, this.mousePointer || "pointer" );
    }

    @HostListener("onmouseleave")
    doMouseLeave(){
        this.setStyle( null, null );
    }



    setStyle( bgColor:string, pointer:string ){
        console.log("HighlightDirective::setStyle(), bg color", bgColor);
        this.elem.nativeElement.style.backgroundColor = bgColor;
        this.elem.nativeElement.style.cursor = pointer;
    }



}//HighlightDirective
