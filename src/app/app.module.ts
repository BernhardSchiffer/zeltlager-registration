import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ZeltlagerComponent } from "./zeltlager/zeltlager.component";
import { DatenschutzComponent } from "./datenschutz/datenschutz.component";

@NgModule({
  declarations: [AppComponent, ZeltlagerComponent, DatenschutzComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
