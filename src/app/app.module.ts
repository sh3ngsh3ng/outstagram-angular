import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { FeedComponent } from './components/feed/feed.component';
import { FormsModule } from '@angular/forms';
import { AuthInterceptor } from './interceptor/auth.interceptor';
import { AddPostComponent } from './components/add-post/add-post.component';
import { PostComponent } from './components/post/post.component';
import { ProfileComponent } from './components/profile/profile.component';
import { DeleteBtnComponent } from './components/delete-btn/delete-btn.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { BackBtnComponent } from './components/back-btn/back-btn.component';
import { ShowPostComponent } from './components/show-post/show-post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { PaginationComponent } from './components/pagination/pagination.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    SignUpPageComponent,
    NavbarComponent,
    UserPageComponent,
    FeedComponent,
    AddPostComponent,
    PostComponent,
    ProfileComponent,
    DeleteBtnComponent,
    EditPostComponent,
    BackBtnComponent,
    ShowPostComponent,
    PaginationComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatPaginatorModule,
    NgxPaginationModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
