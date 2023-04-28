import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ItemClientComponent } from './components/item-client/item-client.component';
import { AdTitleComponent } from './components/ad-title/ad-title.component';
import { AdContentComponent } from './components/ad-content/ad-content.component';
import { AdLinkComponent } from './components/ad-link/ad-link.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    ItemClientComponent,
    AdTitleComponent,
    AdContentComponent,
    AdLinkComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
