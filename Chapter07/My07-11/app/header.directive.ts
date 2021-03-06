import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: 'header'
})
export class HeaderDirective implements OnInit {
  text: string;
  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    this.text = this.element.nativeElement.textContent;
  	  console.log("HeaderDirective::ngOnInit() instantiated for element ", this.element.nativeElement.tagName
	  , " containing text: " + this.text);
  }
}
