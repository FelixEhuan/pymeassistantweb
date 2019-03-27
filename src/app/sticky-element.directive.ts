import { Directive, Renderer2, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Router, NavigationStart } from '@angular/router';
import { filter } from 'rxjs/operators';

@Directive({
  selector: '[Sticky-Element]'
})

export class StickyElementDirective implements OnInit {
  private initialOffsetFromTop =  0;
  private fixedViewportOffset = 0;
  private observable_data: any;
  private url: boolean;
  navStart: Observable<NavigationStart>;
  @Input() offset: number;
  constructor(private element: ElementRef,
      private renderer: Renderer2, 
      private route: ActivatedRoute, 
      private router: Router) {
    route.url.subscribe(data =>{
      this.observable_data = data;
    });
    this.navStart = router.events.pipe(
      filter(evt => evt instanceof NavigationStart)
    ) as Observable<NavigationStart>;
     }

   ngOnInit() {
  //   this.navStart.subscribe(evt => {
  //     console.log(evt)
  //     evt.url == '/' ? this.url = true : this.url = false;
  //   if (evt.url != '/') {
  //     this.renderer.removeClass(this.element.nativeElement, 'transparent');
  // } else {
  //   this.renderer.addClass(this.element.nativeElement, 'transparent');
  // }  
  // });
   }
  @HostListener('window:scroll', ['$event'])
  private handleScroll($event:Event) {
    
    const currentScroll = $event.srcElement.children[0].scrollTop;
      //menor
    if (currentScroll < this.offset) {
    // console.log('addClass');
      this.renderer.removeClass(this.element.nativeElement, 'navbar-shrink');
      //mayor
    } else if (currentScroll > this.offset) {
      // console.log('RemoveClass');
      // this.renderer.addClass(this.element.nativeElement, 'solid');
      this.renderer.addClass(this.element.nativeElement, 'navbar-shrink');
    }
  }
}
