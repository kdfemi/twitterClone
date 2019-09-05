import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchPopupComponent } from '../search-popup/search-popup.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SearchPopupComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [SearchPopupComponent],
  entryComponents: [SearchPopupComponent]
})
export class SearchSharedModule { }
