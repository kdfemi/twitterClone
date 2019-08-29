import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { MenuController, Events } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { SegmentChangeEventDetail, ScrollDetail } from '@ionic/core';
import { take  } from 'rxjs/operators';
import { AnimateFabService } from '../shared/animate-fab.service';

@Component({
  selector: 'app-notifications',
  templateUrl: 'notifications.page.html',
  styleUrls: ['notifications.page.scss']
})
export class Tab2Page implements OnInit {


  notificationsArray: {title: string, message: string, time: Date}[] = [];
  notifications = new BehaviorSubject<{title: string, message: string, time: Date}[]>([]);
  @ViewChild('content', {static: false}) contetnt: ElementRef<HTMLIonContentElement>;
  toolbarHidden = false;
  @ViewChild('fabButton', {static: false}) fabButton: any;

  constructor(
    private menuCtrl: MenuController,
    private animateFabBtnService: AnimateFabService
  ) {}

  ngOnInit() {
    this.notifications.subscribe((notifications) => {
      this.notificationsArray = notifications;
    });
  }
ionViewDidEnter() {
     this.animateFabBtnService.animate(this.fabButton, 'pen');
}
  toggleMenu() {
    this.menuCtrl.toggle('menu');
  }

  segmentChanged(event: CustomEvent<SegmentChangeEventDetail>) {
    this.notifications.pipe(take(1)).subscribe((notification) => {
      if (event.detail.value === 'mentions') {
        this.notificationsArray = notification.filter((value, index) => index % 2 === 0 );
      } else {
        this.notificationsArray = notification;
      }
      }
      );
  }


  generateNotification() {
    this.notifications.next(this.notificationsArray.concat({title: `title ${this.notificationsArray.length + 1}`,
    message: `Lorem, ipsum dolor sit amet consectetur adipisicing elit.
    Molestias sed, doloremque exercitationem quibusdam, nisi quos deserunt
    illo architecto iste a inventore, pariatur ipsam reiciendis quasi neque?
    Alias perferendis consectetur odio?`,
    time: new Date()}));
  }
}
