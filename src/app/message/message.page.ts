import { Component, OnInit } from '@angular/core';
import { MenuController, ActionSheetController } from '@ionic/angular';
import { ScrollDetail } from '@ionic/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  toolbarHidden = false;

  constructor(
    private menuCtrl: MenuController
  ) { }

  ngOnInit() {
  }

  toggleMenu() {
    this.menuCtrl.toggle('menu');
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
