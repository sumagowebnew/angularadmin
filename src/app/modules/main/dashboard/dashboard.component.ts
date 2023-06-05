import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  constructor (private auth: AuthService) {}
  ngOnInit(): void {
    this.getData()
  }
getData() {
  this.auth.getData().subscribe((res) =>{
    console.log(res)
  })
}
}
