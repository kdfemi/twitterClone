import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollVanishDirective } from './scroll-vanish.directive';
import { SearchPopupComponent } from '../search/search-popup/search-popup.component';
import { EllipsisPipe } from './ellipsis.pipe';


@NgModule({
  declarations: [ScrollVanishDirective, EllipsisPipe],
  imports: [
    CommonModule
  ],
  exports: [ ScrollVanishDirective, EllipsisPipe]
})
export class SharedModule { }
