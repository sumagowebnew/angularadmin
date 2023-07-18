import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
interface vacancy{
position:string
experience:number
}
@Component({
  selector: 'app-vacancy-details',
  templateUrl: './vacancy-details.component.html',
  styleUrls: ['./vacancy-details.component.scss']
})
export class VacancyDetailsComponent implements OnInit {
  vacancy:any[]
  ngOnInit(): void {
this.getVacancy()
  }
  constructor(private apiService:SharedService){}
  getVacancy(){
    this.apiService.getVacancies().subscribe((res)=>{
      this.vacancy = res.data
      console.log(this.vacancy);
    })
  }
  deleteVacancy(id){
    this.apiService.deleteVacancy(id).subscribe((res)=>{
      console.log('success')
    })
  }
}
