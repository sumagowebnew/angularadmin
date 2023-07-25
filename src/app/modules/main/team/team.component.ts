import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit{
  admins:any[]=[];

  constructor(private service:SharedService){}
  ngOnInit(): void {
    this.getAdminDetails()
  }


  getAdminDetails(){
    this.service.getAdminTeam().subscribe((res)=>{
      this.admins = res
      console.log(res);
    })
  }


  deletecontact(id: number){
    const confirmed = window.confirm('Are you sure you want to delete this data?');
    if (confirmed) {
      this.service.deleteAdminTeam(id).subscribe(
        (res) => {
          console.log('Deleted Successfully');
          // You may also want to refresh the dataGrid after deletion if needed
          this.getAdminDetails();
        },
        (error) => {
          console.error('Error while deleting data:', error);
        }
      );
    } else {
      console.log('Deletion cancelled by the user.');
    }
  }
  }

