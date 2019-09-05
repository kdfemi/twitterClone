import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab3Page } from './search.page';
import { SharedModule } from '../shared/shared.module';
import { SearchPopupComponent } from './search-popup/search-popup.component';
import { SearchSharedModule } from './search-shared/search-shared.module';
import { SearchResultPageModule } from './search-result/search-result.module';
import { SearchResultPage } from './search-result/search-result.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    SharedModule,
    SearchSharedModule,
    RouterModule.forChild([{ path: '', component: Tab3Page }])
  ],
  declarations: [
    Tab3Page,
    // SearchPopupComponent
  ],
  // entryComponents: [SearchPopupComponent]
})
export class SearchModule {}
