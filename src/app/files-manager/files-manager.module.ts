import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { ContainerComponent } from './container/container.component';
import { FileComponent } from './file/file.component';
import { FilesComponent } from './files/files.component';
import { FilesDetailComponent } from './files-detail/files-detail.component';
import { MenuControlComponent } from './menu-control/menu-control.component';
import { HeaderComponent } from './header/header.component';
import { FilesManagerComponent } from './files-manager.component';

import { filesManagerRoutes } from './files-manater.route';
import { FileService } from '../providers/file.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(filesManagerRoutes),
  ],
  declarations: [
    ContainerComponent,
    FileComponent,
    FilesComponent,
    FilesDetailComponent,
    MenuControlComponent,
    HeaderComponent,
    FilesManagerComponent,
  ],
})
export class FilesManagerModule { }
