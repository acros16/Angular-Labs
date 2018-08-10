import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import {FormsModule, Form} from '@angular/forms';
import { SessionstorageComponent } from './sessionstorage/sessionstorage.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccountComponent,
    SessionstorageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'account', component: AccountComponent},
      {path: 'login', component: LoginComponent},
      {path: 'sessionstorage',component: SessionstorageComponent}
    ]),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
