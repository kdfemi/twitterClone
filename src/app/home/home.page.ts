import { Component, ViewChild, ElementRef, Output, EventEmitter, Input } from '@angular/core';
import { MenuController, ActionSheetController, Platform } from '@ionic/angular';
import { ScrollDetail } from '@ionic/core';
import { trigger, transition, style, animate } from '@angular/animations';
import { AnimateFabService } from '../shared/animate-fab.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  @ViewChild('content', {static: false}) contetnt: ElementRef<HTMLIonContentElement>;
  @ViewChild('position', {static: false}) position: any;
  @ViewChild('span', {static: false}) span: ElementRef<HTMLSpanElement>;
  // toolbarHidden = false;
  @ViewChild('fabButton', {static: false}) fabButton: any;
  constructor(
    private menuCtrl: MenuController,
    private actionSheetController: ActionSheetController,
    private animateFabBtnService: AnimateFabService
  ) {}
  ionViewDidEnter() {
   this.animateFabBtnService.animate(this.fabButton, 'pen');
  }
  toggleMenu() {
    this.menuCtrl.toggle('menu');
  }

  shareMenu() {
    this.actionSheetController.create({
      buttons: [
        {
          text: 'Send via Direct Message',
          icon: 'mail',
          handler: () => {

          }
        },
        {
          text: 'Add Tweet to Bookmarks',
          icon: 'bookmark',
          handler: () => {

          }
        },
        {
          text: 'Share Tweet via...',
          icon: 'md-share',
          handler: () => {

          }
        }
      ]
    }).then(actionSheetElement => {
      actionSheetElement.present();
    });
  }

  retweetMenu() {
    this.actionSheetController.create(
      {
        buttons: [
          {
            text: 'Retweet',
            icon: 'md-repeat',
            handler: () => {

            }
          },
          {
            text: 'Retweet with comment',
            icon: 'md-create',
            handler: () => {

            }
          }
        ]
      }
    ).then(actionSheetElement => {
      actionSheetElement.present();
    });
  }
}
