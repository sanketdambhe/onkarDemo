import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';



import { BuketshowComponent, UpdateBuketDialog } from './comp/buketshow/buketshow.component';  //component BuketshowComponent, UpdateBuketDialog
import { BuketenterComponent } from './comp/buketenter/buketenter.component';                  //component BuketenterComponent
import { MainNavComponent } from './main-nav/main-nav.component';                              //component MainNavComponent

import { DataService } from './services/data.service';                                         //service dataservice

import { FlexLayoutModule } from '@angular/flex-layout';                     //module FlexLayoutModule
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';   //module BrowserAnimationsModule
import { MaterialmodModule } from './main-modules/materialmod/materialmod.module';             //mdoule MaterialmodModule
import { RouterMainModule } from './main-modules/router-main/router-main.module';              //module RouterMainModule
import { HttpModule } from '@angular/http';                                                    //module HttpModule
import { FormsModule } from '@angular/forms';                                                  //module FormsModule
import { LayoutModule } from '@angular/cdk/layout';                                            //module LayoutModule
import { MatToolbarModule,
         MatButtonModule,
         MatSidenavModule,
         MatIconModule, 
         MatListModule } from '@angular/material';                              //material


@NgModule({
  declarations: [
    AppComponent,
    BuketshowComponent,
    BuketenterComponent,
    MainNavComponent,
    UpdateBuketDialog
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialmodModule,
    RouterMainModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpModule,
    FormsModule
  ],
  providers: [DataService],
  entryComponents: [BuketshowComponent, UpdateBuketDialog],

  bootstrap: [AppComponent]
})
export class AppModule { }
