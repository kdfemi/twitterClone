import { Component, ViewChild, ElementRef, OnInit, AfterViewInit } from '@angular/core';
import { MenuController, Events } from '@ionic/angular';
import { BehaviorSubject } from 'rxjs';
import { SegmentChangeEventDetail, ScrollDetail } from '@ionic/core';
import { take  } from 'rxjs/operators';

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
  constructor(
    private menuCtrl: MenuController
  ) {}

  ngOnInit() {
    this.notifications.subscribe((notifications) => {
      this.notificationsArray = notifications;
    });
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

  logScroll(event: CustomEvent<ScrollDetail>) {
    const currentY = event.detail.currentY;
    const startY = event.detail.startY;
    const velocityY = event.detail.velocityY;
    if (currentY > startY) {
      this.toolbarHidden = true;
    }  else if ((currentY < startY) && velocityY < -0.79) {
      this.toolbarHidden = false;
  } else if (currentY <= 4) {
    this.toolbarHidden = false;
  }
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
