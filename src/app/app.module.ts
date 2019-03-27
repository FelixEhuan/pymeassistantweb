import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingComponent } from './component/landing/landing.component';
import { LoaderComponent } from './component/loader/loader.component';
import { StickyElementDirective } from './sticky-element.directive';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LandingComponent,
    LoaderComponent,
    StickyElementDirective
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
