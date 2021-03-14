import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WelcomeComponent} from "./welcome/welcome.component";
import {LoginComponent} from "./login/login.component";
import {ErrorComponent} from "./error/error.component";
import {CreateUserComponent} from "./create-user/create-user.component";

const routes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'welcome/:name', component: WelcomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'create', component: CreateUserComponent},
  { path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
