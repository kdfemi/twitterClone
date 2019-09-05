import { Component, OnInit, ViewChild, AfterViewInit, Input } from '@angular/core';
import { ModalController, IonSearchbar, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-popup',
  templateUrl: './search-popup.component.html',
  styleUrls: ['./search-popup.component.scss'],
})
export class SearchPopupComponent implements OnInit, AfterViewInit {

  names = ['femi', 'fola', 'lateefat', 'toyosi', 'muyiwa', 'dayo', 'oyin', 'tobi', 'dami', 'christianah'];
  recentSearchArray = [
    {
      imageUrl: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==',
      displayname: 'miniSoda',
      handle: '@kdfemi'
    },
    {
      imageUrl: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==',
      displayname: 'john wick',
      handle: '@johnDwicked'
    },
    {
      imageUrl: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==',
      displayname: 'Liverpool',
      handle: '@lfc'
    },
    {
      imageUrl: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==',
      displayname: 'speedy da darlignton',
      handle: '@speedyman'
    },
    {
      imageUrl: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==',
      displayname: 'Davido',
      handle: '@iamDavido'
    },
    {
      imageUrl: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAAAAACH5BAAAAAAALAAAAAABAAEAAAICTAEAOw==',
      displayname: 'batman',
      handle: '@darkKnight'
    }
  ];
  matched: string[] = [];
  searchQuery: string;
  @Input() navigateBackUrl;
  @ViewChild('searchBar', {static: false}) searchBar: IonSearchbar;

    slideOption = {

      slidesPerView: 4,
      speed: 400,
    };
  constructor(
    private modalController: ModalController,
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
    setTimeout(() => {
      this.searchBar.setFocus();
    }, 500);
  }

  ngAfterViewInit() {

  }

  keyPressSearch() {
    this.matched = [];
    this.names.forEach(name => {
      if (name.indexOf(this.searchQuery) > -1 && this.searchQuery.trim().length > 0) {
        console.log(name);
        this.matched.push(name);
      }

    });
  }
  search($event) {
    console.log(this.searchQuery);
    this.router.navigate(['/', 'searchresult'], {
      queryParams: {
        q: this.searchQuery
      }
    }).then(() => this.modalController.dismiss());
  }
  clearRecent() {
    this.alertController.create({
      message: 'Clear recent searches?',
      buttons: [
        {
        text: 'Cancel',
        role: 'cancel',

        }, {
          text: 'clear',
          handler: () => {
          this.recentSearchArray = [];
        }
        }
      ]
    }).then(alertElem => {
      alertElem.present();
    });
  }
  dismiss() {
    this.modalController.dismiss();
  }
}
