
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule, NgbDropdown } from '@ng-bootstrap/ng-bootstrap';

import {MatMenuModule} from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './pdokmap/sidebar.component';
import { MapViewComponent } from './components/map-view/map-view.component';
import { IndexComponent } from './pages/index/index.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './services/user.service';
import { LoginComponent } from './pages/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { GroupService } from './services/group.service';
import { JwtModule } from '@auth0/angular-jwt';

import { RouterModule,  Routes } from '@angular/router';
import { AgmCoreModule } from '@agm/core';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule, MatOptionModule, MatSelectModule } from '@angular/material';

import {MatIconModule} from '@angular/material/icon';

import {MatSidenavModule} from '@angular/material/sidenav';
import { MatSliderModule } from '@angular/material/slider';
import {MatSidenav} from '@angular/material/sidenav';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatExpansionModule} from '@angular/material/expansion';

import { SuggestService } from './components/service/suggest.service';
import { BagService } from './layers/bag.service';
import { BestuurlijkegrenzenService } from './layers/bestuurlijkegrenzen.service';
import {MatRadioModule} from '@angular/material/radio';
import { SpoorwegenService } from './layers/spoorwegen.service';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { HeaderComponent } from './header/header.component';

export function tokenGetter() {
  return localStorage.getItem('JWT');
}

@NgModule({
  declarations: [
    AppComponent,
    MapViewComponent,
    IndexComponent,
    LoginComponent,
    SidebarComponent,
    LoginFormComponent,
    HeaderComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    MatInputModule, MatOptionModule, MatSelectModule, MatIconModule,
    MatSliderModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatRadioModule,
    DropDownsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatMenuModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    ButtonsModule,
    NgbModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        whitelistedDomains: ['localhost:5000'],
        blacklistedRoutes: ['localhost:5000/api/user/authenticate']
      }
    }),
  ],
  providers: [
    UserService,
    GroupService,
    SuggestService,
    BagService,
    BestuurlijkegrenzenService,
    SpoorwegenService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
