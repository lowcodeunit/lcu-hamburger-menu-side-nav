import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutComponent } from 'projects/common/src/lib/controls/flex-layout/flex-layout.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'fxLayout', component: FlexLayoutComponent, children: [
    { path: ':param', component: FlexLayoutComponent}
  ]},
  // { path: 'map/:Params', component: AmblOnMapComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
