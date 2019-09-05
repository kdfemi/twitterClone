import { Directive, Input, ElementRef, Renderer2, OnInit, HostListener, AfterViewInit, Injectable, Output } from '@angular/core';
import { DomController, IonContent, Platform, IonTabBar } from '@ionic/angular';
import { ScrollDetail } from '@ionic/core';



@Directive({
  selector: '[appScrollVanish]'
})
export class ScrollVanishDirective implements OnInit, AfterViewInit {

  @Input('appScrollVanish') scrollArea: IonContent;

  private hidden = false;
  private triggerDistance = 10;
  private triggerTranslate = 0;
  private translate = 0;
  private maxTranslate;
  private initialTranslate = 0;
  private translateProgression = 4.4;
  private initialOpacity = 1;
  private opacityProgression = 0.01;
  constructor(
    private element: ElementRef,
    private renderer: Renderer2,
    private domController: DomController,
    private platform: Platform
  ) { }

  ngOnInit() {
    this.maxTranslate = -this.platformHeight;
    this.initStyles();
    this.scrollArea.ionScrollEnd.subscribe(end => {
      end.target.ontouchend = () => {
        // this.initStyles();
      };
    });
    this.scrollArea.ionScroll.subscribe((scrollEvent: CustomEvent<ScrollDetail>) => {
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
      // console.log(this.translate, 'Translate');
      // console.log(delta);
      // if (currentY === 0 && (this.translate !== this.initialTranslate)) {
      //   this.initStyles();
      // } else if (delta > this.triggerTranslate) {
      //   this.progressiveHide();
      // } else if (delta < -this.triggerTranslate ) {
      //   this.progressiveShow();
      // }
    });
  }

  ngAfterViewInit() {
     this.scrollArea.scrollEvents = true;
     this.scrollArea.fullscreen = true;
    //  const fak = this.element.nativeElement as HTMLIonTabBarElement;
    //  console.log(fak.getBoundingClientRect());
  }
  get platformHeight(): number {

    if (this.platform.is('ios')) {
      return 44;
    } else {
      return 56;
    }
  }

  initStyles() {
    this.domController.write(() => {
      this.renderer.setStyle(this.element.nativeElement, 'transition', '0.18s linear');
      this.renderer.setStyle(this.element.nativeElement, 'opacity', '1');
      // this.renderer.setStyle(this.element.nativeElement, 'transform', `translateY(${this.initialTranslate}px)`);
    });
  }


  show() {
    this.domController.write(() => {
      // this.renderer.setStyle(this.element.nativeElement, 'height', this.platformHeight + 'px');
      // this.renderer.setStyle(this.element.nativeElement, 'min-height', this.platformHeight + 'px');
      this.renderer.setStyle(this.element.nativeElement, 'display', 'block');
    });
    this.hidden = false;
  }

  hide() {
    this.domController.write(() => {

      // this.renderer.setStyle(this.element.nativeElement, 'height', '0px');
      // this.renderer.setStyle(this.element.nativeElement, 'min-height', '0px');
      this.renderer.setStyle(this.element.nativeElement, 'display', 'none');
    });
    this.hidden = true;
  }

  progressiveShow() {
    if (this.translate < this.initialTranslate ) {
      this.domController.write(() => {
        this.initialOpacity = this.initialOpacity + this.opacityProgression;
        this.renderer.setStyle(this.element.nativeElement, 'opacity', this.initialOpacity);

        // this.translate = this.translate + this.translateProgression;
        this.translate = this.translate + this.translateProgression;
        this.renderer.setStyle(this.element.nativeElement, 'transform', `translateY(${this.translate}px)`);
      });
    }
  }

  progressiveHide() {
    if (this.translate > this.maxTranslate ) {
      this.domController.write(() => {
        this.initialOpacity = this.initialOpacity - this.opacityProgression;
        this.renderer.setStyle(this.element.nativeElement, 'opacity', this.initialOpacity);
        this.translate = this.translate - this.translateProgression;
        this.renderer.setStyle(this.element.nativeElement, 'transform', `translateY(${this.translate}px)`);
      });
    }
  }

}

