import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { MyFeedsComponent } from './my-feeds/my-feeds.component';
import { ControlPushComponent } from './control-push/control-push.component'
import { PostTweetComponent } from './post-tweet/post-tweet.component';


@NgModule({
  declarations: [
    AppComponent,
    MyFeedsComponent,
    ControlPushComponent,
    PostTweetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
