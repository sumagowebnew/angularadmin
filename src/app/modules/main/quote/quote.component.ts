import { Component } from '@angular/core';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.scss']
})
export class QuoteComponent {
  quotes:any[]=[
    {
      
      name:'Mohak Pardeshi',
      mobile:9090009000,
      email:'m@gmail.com',
      type_of_service:'Training Internship',
      other:'',
      address:'Nashik',
      comment:'gfehbcfyebg hegcyueb hygeybcb ',
      date:new Date('2023-04-12'),
    },
    {
      name:'Manav Joshi',
      mobile:9090009000,
      email:'m@gmail.com',
      type_of_service:'Training Internship',
      other:'',
      address:'Nashik',
      comment:'gfehbcfyebg hegcyueb hygeybcb ',
      date:new Date('2023-04-12'),
    }

  ];
  deletecontact(index: number){
    this.quotes.splice(index, 1);
  }
}
