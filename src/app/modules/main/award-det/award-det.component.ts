import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-award-det',
  templateUrl: './award-det.component.html',
  styleUrls: ['./award-det.component.scss']
})
export class AwardDetComponent implements OnInit {
  ngOnInit(): void {
    this.getAwards()
  }
  constructor(private service:SharedService){}

  awards:any[]=[];

  getAwards(){
    this.service.getAward().subscribe(data => this.awards=data)
  }

  deleteAward(id: number){
    this.service.deleteAward(id).subscribe(
      (res)=>{
        alert('Award deleted');
        this.getAwards()
      }
    )
  }
}
