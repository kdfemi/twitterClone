import { Component, ViewChild, ElementRef } from '@angular/core';
import { MenuController, ActionSheetController } from '@ionic/angular';
import { ScrollDetail } from '@ionic/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  // animations: [
  //   trigger('enterAnimation', [
  //     transition(':enter', [
  //       style({transform: 'translateY(-100%)', opacity: 0}),
  //       animate('500ms', style({transform: 'translateY(0)', opacity: 1}))
  //     ]),
  //     transition(':leave', [
  //       style({transform: 'translateY(0)', opacity: 1}),
  //       animate('500ms', style({transform: 'translateY(-100%)', opacity: 0}))
  //     ])
  //   ])
  // ]
})
export class HomePage {

  @ViewChild('content', {static: false}) contetnt: ElementRef<HTMLIonContentElement>;
  toolbarHidden = false;

  constructor(
    private menuCtrl: MenuController,
    private actionSheetController: ActionSheetController
  ) {}

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

  logScroll(event: CustomEvent<ScrollDetail>) {
    const currentY = event.detail.currentY;
    const startY = event.detail.startY;
    const velocityY = event.detail.velocityY;
    if (currentY > startY) {
      this.toolbarHidden = true;
    } else if ((currentY < startY) && velocityY < -0.79) {
        this.toolbarHidden = false;
    } else if (currentY <= 4) {
      this.toolbarHidden = false;
    }
  }
}
