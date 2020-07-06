import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IncomeTaxComponent } from './income-tax/income-tax.component';
import { PropertyTaxComponent } from './property-tax/property-tax.component';


const routes: Routes = [
  {path:'', component:IncomeTaxComponent},
  {path:'propertytax', component:PropertyTaxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[IncomeTaxComponent,PropertyTaxComponent]
