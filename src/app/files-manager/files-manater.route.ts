import { Routes } from '@angular/router';

import { FilesComponent } from './files/files.component';
import { FilesDetailComponent } from './files-detail/files-detail.component';
import { FilesManagerComponent } from './files-manager.component';

// /files
export const filesManagerRoutes: Routes = [
  {
    path: '',
    component: FilesManagerComponent, // can co router-outlet
    children: [
      { path: ':folderName', component: FilesComponent },
      { path: 'details/:fileName', component: FilesDetailComponent },
    ],
  }
];
