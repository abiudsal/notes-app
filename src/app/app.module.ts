import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { MainContentComponent } from './pages/main-content/main-content.component';
import { CardComponent } from './components/card/card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    MainContentComponent,
    CardComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
