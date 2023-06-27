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
    this.service.deleteAdminTeam(id).subscribe((res)=>{
      alert('deleted Success')
    })
  }
  }

