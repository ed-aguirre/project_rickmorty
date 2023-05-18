import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CharacterComponent } from './components/character/character.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RMApiService } from './services/rmapi.service';

@NgModule({
  declarations: [
    AppComponent,
    CharacterComponent,
    CharacterListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [RMApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
