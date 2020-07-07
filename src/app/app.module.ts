import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Routes

// Services

// Components
import { AppComponent } from './app.component';
import { TextComponent } from './components/text/text.component';
import { DateComponent } from './components/date/date.component';
import { RangeComponent } from './components/range/range.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    DateComponent,
    RangeComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
