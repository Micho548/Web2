import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingPageRoutingModule } from './landing-page-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { LandingPageComponent } from './landing-page.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalComponent } from './contact/modal/modal.component';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    ContactComponent,
    HelpComponent,
    LandingPageComponent,
    RegisterComponent,
    LoginComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    LandingPageRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  bootstrap: [LandingPageComponent]
})
export class LandingPageModule { }
