import { Component, OnInit } from '@angular/core';
import {  faPerson,  faShop,  faBoxes,  faMoneyBill } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrls: ['./top-widgets.component.css']
})
export class TopWidgetsComponent {

  faPerson = faPerson;
  faShop = faShop;
  faBoxes=faBoxes;
  // faChartBar = faChartBar;
  faMoneyBill=faMoneyBill;

  constructor() {}

  ngOnInit(): void{

  }

}
