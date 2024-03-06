import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StdformComponent } from './shared/components/stdform/stdform.component';
import { StdtableComponent } from './shared/components/stdtable/stdtable.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PassengerModule } from './shared/passenger/passenger.module';
import { PassengerdashboardComponent } from './shared/passenger/passengerdashboard/passengerdashboard.component';
import { PassengercountComponent } from './shared/passenger/passengerdashboard/passengercount/passengercount.component';
import { PassengercardComponent } from './shared/passenger/passengerdashboard/passengercard/passengercard.component';



@NgModule({
  declarations: [
    AppComponent,
    StdformComponent,
    StdtableComponent,
    PassengerdashboardComponent,
    PassengercountComponent,
    PassengercardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    PassengerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
