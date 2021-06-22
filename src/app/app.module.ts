import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
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
import { ActivatedRoute } from '@angular/router';
import { OfferBlockComponent } from './offer-block/offer-block.component';
import { BloxComponent } from './blox/blox.component';
import { AgmCoreModule } from '@agm/core';
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
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    route: ActivatedRoute
  ) {
    route.params.pipe(
      // map(params => params['id']),
    ).subscribe((params) => {
        // this.scrollTo(params)
        console.log(params);
      });
  }
}
