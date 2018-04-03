import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MenuSideBarComponent } from './menu-side-bar/menu-side-bar.component';
import { ContainerComponent } from './container/container.component';
import { FileComponent } from './file/file.component';
import { FilesComponent } from './files/files.component';
import { HeaderComponent } from './header/header.component';
import { MenuControlComponent } from './menu-control/menu-control.component';
import { MembersPipe } from './pipes/members.pipe';
import { FileService } from './providers/file.service';
import { AuthHttpInterceptor } from './providers/http.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    MenuSideBarComponent,
    ContainerComponent,
    FileComponent,
    FilesComponent,
    HeaderComponent,
    MenuControlComponent,
    MembersPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [
    // để sử dụng được interceptor, chúng ta đưa vào providers với cú pháp như sau
    // hiểu đơn giản:
    // - Này angular mỗi lần gửi request thì chạy dùm tao cái interceptor này. Thanks you
    // - Angular: You're welcome...
    { provide: HTTP_INTERCEPTORS, useClass: AuthHttpInterceptor, multi: true },

    FileService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
