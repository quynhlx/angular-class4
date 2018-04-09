import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthenticatedComponent } from './authenticated/authenticated.component';
import { MenuSideBarComponent } from './menu-side-bar/menu-side-bar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [
    MenuSideBarComponent,
    AuthenticatedComponent,
  ],
  exports: [
    MenuSideBarComponent,
    AuthenticatedComponent,
  ]
})
export class LayoutModule { }
