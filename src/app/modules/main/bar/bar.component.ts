import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { faDashboard, faPerson, faShop, faBox, faMoneyBill, faChartBar, faContactBook, faHand, faFolder } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.css']
})
export class BarComponent implements OnInit  {
  faDashboard = faDashboard;
  faPerson=faPerson;
  faShop=faShop;
  faBox=faBox;
  faMoneyBill=faMoneyBill;
  faChartBar=faChartBar;
  faContactBook=faContactBook;
  faHand=faHand;
  faFolder=faFolder;

  constructor(private el:ElementRef){}
  ngOnInit(): void {

    let alldrpdwn = document.querySelectorAll('.dropdow-container');
    alldrpdwn.forEach((item:any)=>{
      const a = item.parentElement?.querySelector('a:first-child');
      a.addEventListener('click',(e:any)=>{
          e.preventDefault();
          this.el.nativeElement.classList.toggle('active');
          item.classList.toggle('show');
      });
      
    });

  }

  

  @ViewChild('sidenav') sidenav:MatSidenav | undefined
  responsiveMenu:any;
  responsiveContent:any;
  defaultStatus=false;
  hideanchor=false;
  openNav(status:any){
    if(status===this.defaultStatus)
    {
      this.responsiveContent={
  
      }
      this.defaultStatus = true;
      this.hideanchor = true;
      
    }else//sidenav on
    {      
      this.responsiveContent={
      }
      this.defaultStatus=false;
  }
}
}
