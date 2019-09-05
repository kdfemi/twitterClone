import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { SearchPopupComponent } from '../search-popup/search-popup.component';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.page.html',
  styleUrls: ['./search-result.page.scss'],
})
export class SearchResultPage implements OnInit {

  searchQuery: string;
  constructor(
    private route: ActivatedRoute,
    private searchModal: ModalController
  ) { }

  ngOnInit() {
      this.route.queryParamMap.subscribe(queryParam => {
       if (queryParam.has('q')) {
        this.searchQuery = queryParam.get('q');
        console.log(this.searchQuery, 'test');
       }
      }
      );

  }
  toggleMenu() {

  }
  search(e) {
    this.searchModal.create({
      component: SearchPopupComponent,
      componentProps: {
        navigateBackUrl: '/searchresult'
      }
    }).then( modalElem => {
      modalElem.present();
    });
    console.log(this.searchQuery);
  }
  segmentChanged($event) {

  }
}
