import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-mou-details',
  templateUrl: './mou-details.component.html',
  styleUrls: ['./mou-details.component.scss']
})
export class MouDetailsComponent implements OnInit {
  ngOnInit(): void {
    this.getMou()
  }

  constructor(private service:SharedService){}

  mouDetails: any[] = [];
   
  getMou() {
    this.service.getMou().subscribe((Mous:[]) =>{
      this.mouDetails = Mous;
    })
  }

  deleteMou(id:number) {
    this.service.deleteMou(id).subscribe(() =>{
      alert('Delete Success')
          this.getMou();
        })
  }

}

