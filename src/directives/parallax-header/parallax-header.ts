import { Directive, ElementRef, Renderer } from '@angular/core';

/**
 * Generated class for the ParallaxHeaderDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
  selector: '[parallax-header]', // Attribute selector
  host: {
    '(ionScroll)': 'onContentScroll($event)'
  }
})
export class ParallaxHeaderDirective {
  translateamt;
  header;
  headerHeight;
  mainContent;
  constructor(public element: ElementRef, public renderer: Renderer) {
    console.log('Hello ParallaxHeaderDirective Directive');
  }

  ngOnInit() {
    // Selecter Header Section
    let content = this.element.nativeElement.getElementsByClassName('scroll-content')[0];
    // Header Image
    this.header = content.getElementsByClassName('header-image')[0];
    // Main Content
    let mainContent = content.getElementsByClassName('main-content')[0];
    let mainContentSkleton = content.getElementsByClassName('main-content-skleton')[0];
    // Get Header height
    this.headerHeight = this.header.clientHeight;
    // Set some CSS to Main content
    this.renderer.setElementStyle(this.header, 'webkitTransformOrigin', 'center bottom');
    this.renderer.setElementStyle(this.header, 'background-size', 'cover');
    this.renderer.setElementStyle(mainContent, 'position', 'absolute');
  }
  onContentScroll(ev) {
    console.log(ev);
    if (ev.scrollTop > 0) {
      this.translateamt = ev.scrollTop / 2;
    }
    this.renderer.setElementStyle(this.header, 'webkitTransform', 'translate3d(0,' + this.translateamt + 'px,0)');
  }
}
