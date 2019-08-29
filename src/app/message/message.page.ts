import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController, ActionSheetController } from '@ionic/angular';
import { ScrollDetail } from '@ionic/core';
import { AnimateFabService } from '../shared/animate-fab.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.page.html',
  styleUrls: ['./message.page.scss'],
})
export class MessagePage implements OnInit {
  toolbarHidden = false;

  @ViewChild('fabButton', {static: false}) fabButton: any;
  constructor(
    private menuCtrl: MenuController,
    private animateFabBtnService: AnimateFabService
  ) { }

  ngOnInit() {
  }

  toggleMenu() {
    this.menuCtrl.toggle('menu');
  }

  ionViewDidEnter() {

    this.animateFabBtnService.animate(this.fabButton, 'msg');
  }
}
