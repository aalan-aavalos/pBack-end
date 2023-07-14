import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarUsrComponent } from './components/sidebar-usr/sidebar-usr.component';
import { SidebarLecComponent } from './components/sidebar-lec/sidebar-lec.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ActivComponent } from './components/activ/activ.component';
import { NotifComponent } from './components/notif/notif.component';
import { HomeUsrComponent } from './components/home-usr/home-usr.component';
import { CalUsrComponent } from './components/cal-usr/cal-usr.component';
import { RegisComponent } from './components/regis/regis.component';
import { CalComponent } from './components/cal/cal.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    SidebarUsrComponent,
    SidebarLecComponent,
    HomeComponent,
    LoginComponent,
    ActivComponent,
    NotifComponent,
    HomeUsrComponent,
    CalUsrComponent,
    RegisComponent,
    CalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
