import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { TextBlockComponent } from './text-block/text-block.component';
import { GertiBlockComponent } from './gerti-block/gerti-block.component';
import { NewOpeningBlockComponent } from './new-opening-block/new-opening-block.component';
import { ActivitiesBlockComponent } from './activities-block/activities-block.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegistrationBlockComponent } from './registration-block/registration-block.component';
import { FooterBlockComponent } from './footer-block/footer-block.component';
import { OfferBlockComponent } from './offer-block/offer-block.component';
import { BloxComponent } from './blox/blox.component';
import { ContactBlockComponent } from './contact-block/contact-block.component';
import { BtnComponent } from './btn/btn.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderBlockComponent } from './header-block/header-block.component';

@NgModule({
  declarations: [
    AppComponent,
    TextBlockComponent,
    GertiBlockComponent,
    NewOpeningBlockComponent,
    ActivitiesBlockComponent,
    RegistrationBlockComponent,
    FooterBlockComponent,
    OfferBlockComponent,
    BloxComponent,
    ContactBlockComponent,
    BtnComponent,
    HeaderBlockComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() { }
}
