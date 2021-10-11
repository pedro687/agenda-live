import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HomeComponent } from './views/home/home.component';
import { LiveListComponent } from './views/live-list/live-list.component';
import { HttpClientModule } from '@angular/common/http';
import { LocalDateTimePipe } from './shared/pipe/local-date-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LiveListComponent,
    LocalDateTimePipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule
  ],
  providers: [
    LocalDateTimePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
