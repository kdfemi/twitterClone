import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: 'search.page.html',
  styleUrls: ['search.page.scss']
})
export class Tab3Page {

  constructor(private menuCtrl: MenuController) {}

  toggleMenu() {
    this.menuCtrl.toggle('menu');
  }
}
