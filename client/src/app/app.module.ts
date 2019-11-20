import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatMenuModule} from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule,  Routes } from '@angular/router';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MapViewOpenStreetComponent } from './components/map-view-open-street/map-view-open-street.component';
import { SearchingComponent } from './components/searching/searching.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule, MatOptionModule, MatSelectModule } from '@angular/material';
import {FormsModule, ReactiveFormsModule, FormControlName} from '@angular/forms';
import { HomepageComponent } from './components/homepage/homepage.component';
import {MatIconModule} from '@angular/material/icon';
import { RegistrationpageComponent } from './registrationpage/registrationpage.component';
import { AlertComponent } from './directives';
import { UserService } from './service/user.service';
import { AlertService } from './service/alert.service';
import { AuthenticationService } from './service/authentication.service';
import { SidebarComponent } from './pdokmap/sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import {MatSidenav} from '@angular/material/sidenav';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { SidebarFunctionsDrawComponent } from './sidebar-functions-draw/sidebar-functions-draw.component';
import { HomeComponent } from './components/admin/home/home.component';
import { UpdateComponent } from './components/admin/update/update.component';
import { NewComponent } from './components/admin/new/new.component';
import { DeleteComponent } from './components/admin/delete/delete.component';
import { MapViewBingComponent } from './components/map-view-bing/map-view-bing.component';
import { GooglemapsComponent } from './components/googlemaps/googlemaps.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { SuggestService } from './components/service/suggest.service';
import { BagService } from './layers/bag.service';
import { BestuurlijkegrenzenService } from './layers/bestuurlijkegrenzen.service';
import {MatRadioModule} from '@angular/material/radio';
import { SpoorwegenService } from './layers/spoorwegen.service';

// import { InterfacesComponent } from './components/admin/interfaces/interfaces.component';

@NgModule({
  declarations: [
    AppComponent,
    MapViewComponent,
    HeaderComponent,
    FooterComponent,
    LoginpageComponent,
    MapViewOpenStreetComponent,
    SearchingComponent,
    HomepageComponent,
    RegistrationpageComponent,
    AlertComponent,
    SidebarComponent,
    SidebarFunctionsDrawComponent,
    HomeComponent,
    UpdateComponent,
    NewComponent,
    DeleteComponent,
    MapViewBingComponent,
    GooglemapsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatInputModule, MatOptionModule, MatSelectModule, MatIconModule,
    FormsModule,
    MatSliderModule,
    MatSidenavModule,
    ReactiveFormsModule,
    ButtonsModule,
    MatMenuModule,
    MatCheckboxModule,
    MatExpansionModule,
    HttpClientModule,
    MatRadioModule,
  ],
  providers: [
    AlertService,
        AuthenticationService,
        UserService,
        SuggestService,
        BagService,
        BestuurlijkegrenzenService,
        SpoorwegenService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
