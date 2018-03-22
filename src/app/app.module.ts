import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuSideBarComponent } from './menu-side-bar/menu-side-bar.component';
import { ContainerComponent } from './container/container.component';
import { FileComponent } from './file/file.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuSideBarComponent,
    ContainerComponent,
    FileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
