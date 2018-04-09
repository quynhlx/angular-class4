import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { LayoutModule } from './layout/layout.module';
import { CoreModule } from './core/core.module';

import { NotFoundComponent } from './not-found/not-found.component';

import { MembersPipe } from './pipes/members.pipe';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    MembersPipe,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    LoginModule,
    RegisterModule,
    LayoutModule,
    CoreModule.forRoot(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
