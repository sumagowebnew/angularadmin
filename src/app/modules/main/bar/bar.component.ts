import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { faDashboard, faPerson, faShop, faBox, faMoneyBill, faChartBar, faContactBook, faHand } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent {
  faDashboard = faDashboard;
  faPerson=faPerson;
  faShop=faShop;
  faBox=faBox;
  faMoneyBill=faMoneyBill;
  faChartBar=faChartBar;
  faContactBook=faContactBook;
  faHand=faHand
  

  @ViewChild('sidenav') sidenav:MatSidenav | undefined
  responsiveMenu:any;

}
