import { Injectable, ElementRef } from '@angular/core';
import { AnimationBuilder, style, animate } from '@angular/animations';
import { IonFabButton } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AnimateFabService {
  iconType: string;
  previousTab: string;
  reloaded = true;

  constructor(
    private animationBuilder: AnimationBuilder
  ) { }

  /*** icon: pen | msg
    */

  animate(element: any, icon: string) {
    if (this.reloaded) {
      this.reloaded = false;
      if (icon === 'pen') {
        this.previousTab = 'penTabs';
      }
      return;
    }
    this.iconType = icon;
    if (icon === 'pen' && (this.previousTab !== 'penTabs' || !this.previousTab)) {
      const factory = this.animationBuilder.build([
        style({transform: 'rotate(90deg)'}),
        animate('0.07s', style({transform: 'rotate(0deg)'}))
      ]);
      const anim = factory.create(element.el);
      anim.play();
      this.previousTab = 'penTabs';
    } else if (icon === 'msg' && (this.previousTab === 'penTabs' || !this.previousTab)) {
      const factory = this.animationBuilder.build([
        style({transform: 'rotate(-90deg)'}),
        animate('0.07s', style({transform: 'rotate(0deg)'}))
      ]);
      const anim = factory.create(element.el);
      anim.play();
      this.previousTab = undefined;
    }
    }
}
