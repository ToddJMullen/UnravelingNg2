import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: 'h1, h2, h3, h4, h5, h6, p, p.test, p#hasId'
})
export class HnDirective implements OnInit {
  level: number;
  text: string;
  constructor(private element: ElementRef) {}

  ngOnInit() {
    this.level = parseInt(this.element.nativeElement.nodeName.substring(1) || 0 );
    this.text = this.element.nativeElement.textContent;
  	  console.log("HeaderDirective::ngOnInit() instantiated for element "
	  , this.element.nativeElement.nodeName
	  , " containing text: " + this.text
	  , ", level: " + this.level, this.element );
  }
}
