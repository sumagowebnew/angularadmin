import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.scss']
})
export class UpdateContactComponent implements OnInit {
formId 
  ngOnInit(): void {
    this.activated.params.subscribe((res:any[])=>{
      this.formId = JSON.stringify(res)
      console.log(this.formId.map(res=>{
        res.Object
      }));
      

    })
  }
  constructor(private router:Router,private activated:ActivatedRoute){}

}
