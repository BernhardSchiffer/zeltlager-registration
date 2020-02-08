import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ZeltlagerComponent } from "./zeltlager/zeltlager.component";
import { DatenschutzComponent } from "./datenschutz/datenschutz.component";

const routes: Routes = [
  { path: "", component: ZeltlagerComponent },
  { path: "privacy", component: DatenschutzComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
