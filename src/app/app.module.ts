import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuSideBarComponent } from './menu-side-bar/menu-side-bar.component';
import { ContainerComponent } from './container/container.component';
import { FileComponent } from './file/file.component';
import { FilesComponent } from './files/files.component';
import { HeaderComponent } from './header/header.component';
import { MenuControlComponent } from './menu-control/menu-control.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuSideBarComponent,
    ContainerComponent,
    FileComponent,
    FilesComponent,
    HeaderComponent,
    MenuControlComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
