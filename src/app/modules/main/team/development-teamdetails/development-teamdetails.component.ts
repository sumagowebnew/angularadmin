import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
interface TeamDetail {
  id:number;
  name: string;
  photo: string;
  designation_id: string;
  qualification: string;
  experience: number;
  status: string;
  date: string;
}
@Component({
  selector: 'app-development-teamdetails',
  templateUrl: './development-teamdetails.component.html',
  styleUrls: ['./development-teamdetails.component.scss']
})
export class DevelopmentTeamdetailsComponent implements OnInit {
 constructor(private service:SharedService){}
  ngOnInit(): void {
   this.getTeamDetails();
  }

 TeamDetails:TeamDetail[] = []

 getTeamDetails(){
  this.service.getDevelopmentTeam().subscribe((res)=>{
    this.TeamDetails = res;
    console.log(this.TeamDetails);
    
  })
 }

 deleteTeamDetails(id:number){
  this.service.deleteDevelopmentTeam(id).subscribe((res)=>{
      if(res){
        alert('Deleted record Successfully')
      }
      else{
        alert('failed')
      }
  })
 }
}
