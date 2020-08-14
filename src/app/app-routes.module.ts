import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { OglasListComponent } from './oglas/oglas-list/oglas-list.component';
import { CreateOglasComponent } from './oglas/create-oglas/create-oglas.component';
import { OglasDetailsComponent } from './oglas/oglas-details/oglas-details.component';
import { AuthGuard } from './guards/auth.guard';



const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'oglasi/list', component: OglasListComponent, canActivate: [AuthGuard] },
  { path: 'oglasi/create', component: CreateOglasComponent, canActivate: [AuthGuard] },
  { path: 'oglas/:code', component: OglasDetailsComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/register' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutesModule { }
