import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPostComponent } from './components/add-post/add-post.component';
import { EditPostComponent } from './components/edit-post/edit-post.component';
import { FeedComponent } from './components/feed/feed.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ShowPostComponent } from './components/show-post/show-post.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component'
import { SignUpPageComponent } from './pages/sign-up-page/sign-up-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { AdminRouteGuardService } from './services/admin-route-guard.service';
import { RouteGuardService } from './services/route-guard.service';

const routes: Routes = [
  {path:"", component: NavbarComponent, outlet:"navbar"},
  {path: "", redirectTo: "/login", pathMatch: "full"},
  {path:"login", component: LoginPageComponent},
  {path:"signup", component: SignUpPageComponent},
  {path: "user", component: UserPageComponent, canActivate: [RouteGuardService]},
  {path:"admin", component: AdminPageComponent, canActivate: [AdminRouteGuardService]},
  {path: "feed", component: FeedComponent, canActivate:[RouteGuardService], outlet: "user" },
  {path: "addpost", component: AddPostComponent, canActivate:[RouteGuardService], outlet: "user"},
  {path: "profile", component: ProfileComponent, canActivate:[RouteGuardService], outlet: "user"},
  {path: "post/:id", component: ShowPostComponent, canActivate:[RouteGuardService], outlet: "user"},
  {path: "post/edit/:id", component: EditPostComponent, canActivate:[RouteGuardService], outlet: "user"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [RouteGuardService, AdminRouteGuardService]
})
export class AppRoutingModule { }
