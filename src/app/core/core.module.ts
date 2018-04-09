import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FileService } from '../providers/file.service';
import { AuthGuard } from '../providers/auth.guard';
import { AuthService } from '../providers/auth.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
})
export class CoreModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        AuthGuard,
        AuthService,
        FileService,
      ],
    };
  }
}
