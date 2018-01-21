import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
	MatButtonModule,
	MatIconModule,
	MatCardModule,
	MatListModule,
	MatGridListModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CardService } from './services/card.service';
import { BattleService } from './services/battle.service';

import { AppComponent } from './app.component';
import { BattleComponent } from './battle/battle.component';


@NgModule({
  declarations: [
    AppComponent,
    BattleComponent
  ],
  imports: [
  	BrowserAnimationsModule,
  	FlexLayoutModule,
  	MatButtonModule,
	MatIconModule,
	MatCardModule,
	MatListModule,
	MatGridListModule,
    BrowserModule
  ],
  providers: [ 
  	CardService,
  	BattleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
