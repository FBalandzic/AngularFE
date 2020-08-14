import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OglasItemComponent } from './oglas/oglas-item/oglas-item.component';
import { OglasListComponent } from './oglas/oglas-list/oglas-list.component';
import { CreateOglasComponent } from './oglas/create-oglas/create-oglas.component';
import { OglasService } from './services/oglas.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { OglasDetailsComponent } from './oglas/oglas-details/oglas-details.component';
import { AuthService } from './services/auth.service';
import { OglasAppInterceptor } from './services/oglas- app.interceptor';
import { AppRoutesModule } from './app-routes.module';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserService } from './services/user.service';
import { UserStoreService } from './services/user-store.service';
import { AuthGuard } from './guards/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    OglasItemComponent,
    OglasListComponent,
    CreateOglasComponent,
    OglasDetailsComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutesModule
  ],
  providers: [OglasService,
   AuthService,
    UserService,
    UserStoreService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: OglasAppInterceptor,
      multi: true,
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
