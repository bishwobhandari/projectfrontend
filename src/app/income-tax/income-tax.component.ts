import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-income-tax',
  templateUrl: './income-tax.component.html',
  styleUrls: ['./income-tax.component.css']
})
export class IncomeTaxComponent implements OnInit {

  title = 'frontend';
  public taxRates = [];
  public taxedIncome = [];
  public state = "";
  constructor(private _api: ApiService) { }

  taxrates: any = [];
  salary={"salary":"70000"}
  ngOnInit() {
    this._api.calculateIncome(this.salary)
      .subscribe(data => this.taxedIncome = data);
  }

  onSubmit(f: NgForm) {
    this.salary=f.value
    this._api.calculateIncome(f.value).subscribe(data => this.taxedIncome = data);
  }

  Search() {
    let income=this.taxedIncome;
    if (this.state != "") {
      console.log("if", this.state)
      this.taxedIncome = income.filter(res => {
        return res.state.toLocaleLowerCase().match(this.state.toLowerCase())
      })
    }
    else if(this.state==""){
      console.log("else if", this.state)
      this.taxedIncome=this.taxedIncome;
    }
  }

}
