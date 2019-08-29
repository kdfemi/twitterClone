import { Component, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AnimateFabService } from '../shared/animate-fab.service';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class Tab3Page {

  @ViewChild('fabButton', {static: false}) fabButton: any;

  constructor(
    private menuCtrl: MenuController,
    private animateFabBtnService: AnimateFabService) {}

    ionViewDidEnter() {
     this.animateFabBtnService.animate(this.fabButton, 'pen');
    }

    toggleMenu() {
    this.menuCtrl.toggle('menu');
  }
}
