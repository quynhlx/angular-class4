import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { MenuSideBarComponent } from './menu-side-bar/menu-side-bar.component';
import { ContainerComponent } from './container/container.component';
import { FileComponent } from './file/file.component';
import { FilesComponent } from './files/files.component';
import { HeaderComponent } from './header/header.component';
import { MenuControlComponent } from './menu-control/menu-control.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthenticatedComponent } from './authenticated/authenticated.component';
import { NotFoundComponent } from './not-found/not-found.component';

import { MembersPipe } from './pipes/members.pipe';

import { FileService } from './providers/file.service';
import { AuthService } from './providers/auth.service';
import { AuthGuard } from './providers/auth.guard';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    MenuSideBarComponent,
    ContainerComponent,
    FileComponent,
    FilesComponent,
    HeaderComponent,
    MenuControlComponent,
    MembersPipe,
    LoginComponent,
    RegisterComponent,
    AuthenticatedComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [
    FileService,
    AuthGuard,
    AuthService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
