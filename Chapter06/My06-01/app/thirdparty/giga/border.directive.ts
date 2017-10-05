import {Directive, ElementRef, HostListener} from "@angular/core";
import {Input}  from "@angular/core";


@Directive({
  selector: "[giga-border]"
})
export class BorderDirective{

    @Input("giga-border")
    type:string;

    @Input("giga-border-px")
    px:number;

    @Input("giga-border-color")
    color:string;

    constructor( private elem:ElementRef ){
        console.log("BorderDirective()", this.elem );
    }

    @HostListener('mouseenter')
    onMouseEnter(){
        this.applyStyle( this.type, this.color, this.px );
    }

    @HostListener("mouseleave")
    onMouseLeave(){
        this.applyStyle( null, null, null );
//        let style = this.elem.nativeElement.style;
//        delete style.borderColor;
//        delete style.borderWidth;
//        delete style.borderStyle;
    }


    applyStyle( type, color, px ){
        console.log("BorderDirective::applyStyle()", type, color, px );
        let style = this.elem.nativeElement.style;
        style.borderColor = this.color;
        style.borderWidth = this.px + "px";
        style.borderStyle = this.type;
    }


}//BorderDirective
