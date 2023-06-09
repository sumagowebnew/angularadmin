import { Component } from '@angular/core';
import { PortDet } from './port-det.model';
import { Sort } from '@angular/material/sort';


@Component({
  selector: 'app-portfolio-details',
  templateUrl: './portfolio-details.component.html',
  styleUrls: ['./portfolio-details.component.css']
})
export class PortfolioDetailsComponent {
  portfolios:any[]=[
    {
      title:'MEAN stack development',
      webstatus:'on-site',
      portfolio:'Purva Diwate',
      weblink:'https://angular.io/',
      date:new Date('2022-09-08'),
    },
    {
      title:'UI/UX' ,
      webstatus:'remote',
      portfolio:'Mitisha Patel',
      weblink:'https://react.io/',
      date:new Date('2021-08-31'),
    },
    {
      title:'Angular Developer',
      webstatus:'hybrid',
      portfolio:'Aditi Sonawane',
      weblink:'https://bootstrap.io/',
      date:new Date('2019-02-24'),
    },
    

  ];
  deleteportfolio(index: number){
    this.portfolios.splice(index, 1);
  }
  editportfolio(index: number){
    this.portfolios.splice(index, 1);
  }
}
  //before code 
//   portDet: PortDet[
//   ] = [
//     {
//     Sr: 1,
//     StatusAction: true,
//     Title: 'Demo',
//     WebsiteStatus: false,
//     Portfolio: 'img',
//     WebsiteLink: 'apple',
//     Date: '26-10-2000',
//   }
//       ,
//   {
//     Sr: 1,
//     StatusAction: false,
//     Title: 'Aemo',
//     WebsiteStatus: true,
//     Portfolio: 'demo',
//     WebsiteLink: 'google',
//     Date: '27-10-2001',
//   }
//     ]

//   sortData: PortDet[]

//   sortedData(sort: Sort) {
//     const data = this.portDet.slice();
//     if (!sort.active || sort.direction === '') {
//       this.sortData = data;
//       return;
//     }
//     this.sortData = data.sort((a, b) => {
//       const isAsc = sort.direction === 'asc';
//       switch (sort.active) {
//         case 'Title':
//           return compare(a.Title, b.Title, isAsc);
//         case 'Sr':
//           return compare(a.Sr, b.Sr, isAsc);
//         case 'Date':
//           return compare(a.Date, b.Date, isAsc);
//         default:
//           return 0;
//       }
//     });
//   }
// }
// function compare(a: number | string, b: number | string, isAsc: boolean) {
//   return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  
