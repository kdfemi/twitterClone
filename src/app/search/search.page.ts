import { Component, ViewChild } from '@angular/core';
import { MenuController, IonSegment, ModalController } from '@ionic/angular';
import { AnimateFabService } from '../shared/animate-fab.service';

import { SearchPopupComponent } from './search-popup/search-popup.component';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class Tab3Page {

  @ViewChild('fabButton', {static: false}) fabButton: any;

  searchQuery: string;
  constructor(
    private menuCtrl: MenuController,
    private animateFabBtnService: AnimateFabService,
    private searchModal: ModalController
    ) {}
    ionViewDidEnter() {
     this.animateFabBtnService.animate(this.fabButton, 'pen');
    }

    toggleMenu() {
    this.menuCtrl.toggle('menu');
  }

  // segmentChanged(event: CustomEvent<IonSegment>) {
  //   console.log(event.detail.value);
  // }
  search(e) {
    this.searchModal.create({
      component: SearchPopupComponent,
      componentProps: {
        navigateBackUrl: '/tabs/search'
      }
    }).then( modalElem => {
      modalElem.present();
    });
    console.log(this.searchQuery);
  }
}
