<<<<<<< HEAD
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ProfileService } from './service/profile.service';

=======
import { ProfileService } from './service/profile.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
>>>>>>> 61d0b588eefe3bbdfeef9aced54d2229a6b504be
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import {HttpClientModule} from '@angular/common/http';
import { DateCountPipe } from './date-count.pipe';
import {FormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [ProfileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
