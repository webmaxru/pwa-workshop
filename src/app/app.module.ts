import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { MaterialModule } from '@angular/material';
import 'hammerjs';

import { IndexedDBService } from './services/indexedDB.service';
import { MyFeedsComponent } from './my-feeds/my-feeds.component';
import { PostTweetComponent } from './post-tweet/post-tweet.component';
import { ControlPushComponent } from './control-push/control-push.component'


@NgModule({
  declarations: [
    AppComponent,
    MyFeedsComponent,
    PostTweetComponent,
    ControlPushComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule
  ],
  providers: [IndexedDBService],
  bootstrap: [AppComponent]
})
export class AppModule { }
