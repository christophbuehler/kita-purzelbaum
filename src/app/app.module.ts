import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { TextBlockComponent } from './text-block/text-block.component';
import { ContactBlockComponent } from './contact-block/contact-block.component';
import { GertiBlockComponent } from './gerti-block/gerti-block.component';
import { NewOpeningBlockComponent } from './new-opening-block/new-opening-block.component';
import { ActivitiesBlockComponent } from './activities-block/activities-block.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LocationBlockComponent } from './location-block/location-block.component';

@NgModule({
  declarations: [
    AppComponent,
    TextBlockComponent,
    GertiBlockComponent,
    NewOpeningBlockComponent,
    ActivitiesBlockComponent,
    LocationBlockComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
