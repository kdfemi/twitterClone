import { Directive, Input, ElementRef, Renderer2, OnInit, HostListener, AfterViewInit, Injectable, Output } from '@angular/core';
import { DomController, IonContent, Platform } from '@ionic/angular';
import { ScrollDetail } from '@ionic/core';

@Injectable()
export class Counter {
  number = 23;
}
@Directive({
  selector: '[appScrollVanish]',
  providers: [Counter]
})
export class ScrollVanishDirective implements OnInit, AfterViewInit {

  @Input('appScrollVanish') scrollArea: IonContent;

  private hidden = false;
  private triggerDistance = 10;
  private height: number;
  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private domController: DomController,
    private platform: Platform,
    private counter: Counter
  ) { }

  ngOnInit() {

    this.initStyles();
    this.scrollArea.ionScroll.subscribe((scrollEvent: CustomEvent<ScrollDetail>) => {
      console.log(this.counter.number - 1);
      const delta = scrollEvent.detail.deltaY;
      const currentY = scrollEvent.detail.currentY;
      const velocityY = scrollEvent.detail.velocityY;
      if (currentY === 0 && this.hidden) {
        this.show();
      } else if (!this.hidden && delta > this.triggerDistance) {
        this.hide();
      } else if (this.hidden && delta < -this.triggerDistance && velocityY < -0.79) {
        this.show();
      }
    });
  }

  ngAfterViewInit() {
     this.scrollArea.scrollEvents = true;
     this.scrollArea.fullscreen = true;
  }

  hide() {
    this.domController.write(() => {

      // this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
      this.renderer.setStyle(this.element.nativeElement, 'height', '0px');
      this.renderer.setStyle(this.element.nativeElement, 'min-height', '0px');
    });
    this.hidden = true;
  }
  show() {
    this.domController.write(() => {
      // this.renderer.setStyle(this.element.nativeElement, 'display', 'block');
      this.renderer.setStyle(this.element.nativeElement, 'height', this.platformHeight + 'px');
      this.renderer.setStyle(this.element.nativeElement, 'min-height', this.platformHeight + 'px');
    });
    this.hidden = false;
  }

  initStyles() {
    this.domController.write(() => {
      this.renderer.setStyle(this.element.nativeElement, 'transition', '0.2s linear');
    });
  }

  get platformHeight(): number {

    if (this.platform.is('ios')) {
      return 44;
    } else {
      return 56;
    }
  }
}

