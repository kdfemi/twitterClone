import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SearchResultPage } from './search-result.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { SearchPopupComponent } from '../search-popup/search-popup.component';
import { SearchSharedModule } from '../search-shared/search-shared.module';

const routes: Routes = [
  {
    path: '',
    component: SearchResultPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchSharedModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  declarations: [SearchResultPage],
  // entryComponents: [SearchPopupComponent]
})
export class SearchResultPageModule {}
