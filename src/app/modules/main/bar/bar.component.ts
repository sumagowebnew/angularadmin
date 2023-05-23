import { Component, ElementRef, ViewChild, OnInit } from '@angular/core';
import { MatSidenav} from '@angular/material/sidenav';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { MatDrawer } from '@angular/material/sidenav';

import { map, shareReplay } from 'rxjs/operators';
import { faDashboard, faPerson, faShop, faBox, faMoneyBill, faChartBar, faContactBook, faHand, faFolder } from '@fortawesome/free-solid-svg-icons';

// import { faDashboard, faPerson, faShop, faBox, faMoneyBill, faChartBar, faContactBook, faHand, faFolder } from '@fortawesome/free-solid-svg-icons';


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
  
  isHandset$: Observable<boolean>;
  constructor(
    private breakpointObserver: BreakpointObserver, private el: ElementRef
    ){
      this.isHandset$ = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    
  );

  // faDashboard = faDashboard;
  // faPerson=faPerson;
  // faShop=faShop;
  // faBox=faBox;
  // faMoneyBill=faMoneyBill;
  // faChartBar=faChartBar;
  // faContactBook=faContactBook;
  // faHand=faHand;
  // faFolder=faFolder;



      window.addEventListener('scroll', function(){
        var mattoolbar:any = document.querySelector("mat-toolbar");
        mattoolbar.classList.toggle("sticky", window.scrollY > 0);
      }
      )
     
  
  }
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
      this.responsiveMenu={
      
      }
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
@ViewChild(MatDrawer) drawer: MatDrawer | undefined;

toggleDrawer() {
  if (this.drawer) {
    this.drawer.toggle();
  }
}
}


//admindemo code
// import { Component, ElementRef, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-bar',
//   templateUrl: './bar.component.html',
//   styleUrls: ['./bar.component.css']
// })
//  export class BarComponent implements OnInit {
//   constructor(private el: ElementRef) { }
//   ngOnInit(): void {

//     let alldrpdwn = document.querySelectorAll('.dropdow-container');
//     console.log(alldrpdwn, 'alldrpdwn#');
//     alldrpdwn.forEach((item: any) => {
//       const a = item.parentElement?.querySelector('a:first-child');
//       console.log(a, 'a#');
//       a.addEventListener('click', (e: any) => {
//         e.preventDefault();
//         this.el.nativeElement.classList.toggle('active');
//         item.classList.toggle('show');
//       });

//     });

//   }


//   // responsivemenu 
//   responsiveMenu: any;
//   // responsivemaincontent
//   responsiveContent: any;
//   defaultStatus = false;
//   hideanchor = false;
//   openNav(status: any) {
//     if (status === this.defaultStatus) {
//       this.responsiveMenu = {
//         'display': 'block',
//         'width': '60px',
//         // 'text-align': 'center'
//       }
//       this.responsiveContent = {
//         'margin-left': '60px'
//       }
//       this.defaultStatus = true;
//       this.hideanchor = true;
//     } else {
//       this.responsiveMenu = {
//         'display': null,
//         'text-align': 'center'
//       }
//       this.responsiveContent = {
//         'margin-left': null
//       }
//       this.defaultStatus = false;
//       this.hideanchor = false;
//     }

//   }

// }
