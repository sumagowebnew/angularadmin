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
 searchTerm:string = ''
 filtered: any[] = [];
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
  const confirmed = window.confirm('Are you sure you want to delete this data?');
  if (confirmed) {
    this.service.deleteDevelopmentTeam(id).subscribe(
      (res) => {
        console.log('Deleted Successfully');
        // You may also want to refresh the dataGrid after deletion if needed
        this.getTeamDetails();
      },
      (error) => {
        console.error('Error while deleting data:', error);
      }
    );
  } else {
    console.log('Deletion cancelled by the user.');
  }
 }
 
 onSearch(): void {
  if (this.searchTerm.trim() === '') {
    this.filtered = this.TeamDetails;
  } else {
    this.filtered = this.TeamDetails.filter((news) =>
      news.name.toLowerCase().includes(this.searchTerm.trim().toLowerCase()) ||
      news.designation_id.toLowerCase().includes(this.searchTerm.trim().toLowerCase()) ||
      news.experience
    );
  }
}
}
