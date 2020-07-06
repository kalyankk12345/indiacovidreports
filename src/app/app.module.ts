import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ConwiseComponent } from './conwise/conwise.component';
import { StateWiseComponent } from './state-wise/state-wise.component';

import { WeclomeComponent } from './home/weclome/weclome.component';

import { CovidnewsComponent } from './news/covidnews/covidnews.component';

@NgModule({
  declarations: [
    AppComponent,
    ConwiseComponent,
    StateWiseComponent,
    WeclomeComponent,
    CovidnewsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'welcome',component:WeclomeComponent},
      {path:'conwise',component:ConwiseComponent},
      {path:'state-wise',component:StateWiseComponent},
      {path:'news',component:CovidnewsComponent},
      {path:'',redirectTo:'welcome',pathMatch:'full'},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
