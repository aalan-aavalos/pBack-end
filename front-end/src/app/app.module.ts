import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
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
import { HttpClientModule } from '@angular/common/http';
import { HomeAdmComponent } from './components/home-adm/home-adm.component';
import { SidebarAdmComponent } from './components/sidebar-adm/sidebar-adm.component';
import { RegisUsrComponent } from './components/regis-usr/regis-usr.component';
import { FechaEspPipe } from './pipes/fecha-esp.pipe';
import { CalendarioComponent } from './components/calendario/calendario.component';
import { ActivAdmComponent } from './components/activ-adm/activ-adm.component';
import { NotifAdmComponent } from './components/notif-adm/notif-adm.component';
import { CalAdmComponent } from './components/cal-adm/cal-adm.component';

import { GoogleMapsModule } from '@angular/google-maps';
import { MapComponent } from './components/map/map.component';
import { ECartComponent } from './components/e-cart/e-cart.component';
import { ECartItemComponent } from './components/e-cart-item/e-cart-item.component';
import { EModalComponent } from './components/e-modal/e-modal.component';
import { EProductItemComponent } from './components/e-product-item/e-product-item.component';
import { EProductListComponent } from './components/e-product-list/e-product-list.component';
import { TiendaComponent } from './components/tienda/tienda.component';

//Paypal ademas instale {npm i ngx-paypal}
import { NgxPayPalModule } from 'ngx-paypal';

//Instale eso ,{ng add @ng-bootstrap/ng-bootstrap}
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

//Spinner {npm i ngx-spinner}
import { NgxSpinnerModule } from 'ngx-spinner';

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
    CalComponent,
    HomeAdmComponent,
    SidebarAdmComponent,
    RegisUsrComponent,
    FechaEspPipe,
    CalendarioComponent,
    ActivAdmComponent,
    NotifAdmComponent,
    CalAdmComponent,
    MapComponent,
    ECartComponent,
    ECartItemComponent,
    EModalComponent,
    EProductItemComponent,
    EProductListComponent,
    TiendaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    GoogleMapsModule,
    NgxPayPalModule,
    NgbModule,
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] //Agregue eso para el ngx-spinner
})
export class AppModule { }
