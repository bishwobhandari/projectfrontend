import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-property-tax',
  templateUrl: './property-tax.component.html',
  styleUrls: ['./property-tax.component.css']
})
export class PropertyTaxComponent implements OnInit {

  constructor(private _api: ApiService) { }

  property_value_taxed=[]
  property_value={"property_value":"250000"}
  ngOnInit(): void {
    this._api.getPropertyTax(this.property_value)
    .subscribe(data => this.property_value_taxed = data);
  }

}
