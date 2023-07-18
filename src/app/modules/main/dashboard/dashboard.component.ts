import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SharedService } from 'src/app/services/shared.service';

interface Counters{
  contactEnquiries: number,
    careerEnquiries: number,
    portfolios: number,
    news: number,
    certificates: number,
    mous: number,
    clientlogos: number,
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  constructor (private auth: AuthService,private apiService:SharedService) {}
  ngOnInit(): void {
    this.getData()
    this.getCounter()
  }
  counter
  getCounter(){
    this.apiService.getDashboardCounters().subscribe((res)=>{
      console.log(res)
    this.counter=res
    })
  }
getData() {
  this.auth.getData().subscribe((res) =>{
    console.log(res)
  })
}
}
