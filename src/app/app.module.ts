import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HighlightModule } from 'ngx-highlightjs';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AwesomeTestModule } from '../assets/examples/awesome-test/awesome-test.module';
import { GetFilePipe } from './get-file.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GetFilePipe,
  ],
  imports: [
    BrowserModule,
    HighlightModule,
    HttpClientModule,
    AwesomeTestModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
