import { Component, OnInit } from '@angular/core';
import { Count } from './count.model';
import { CountService } from './count.service';

@Component({
  selector: 'app-count',
  templateUrl: './count.component.html',
  styleUrls: ['./count.component.scss']
})
export class CountComponent implements OnInit {
  counts: Count[] =[];

  constructor(private countService: CountService) { }

  ngOnInit(): void {
    this.counts = this.countService.getCounts();
  }

  deleteCount(index: number): void {
    this.countService.deleteCount(index);
  }

  editCount(count: Count): void {
    // Do something when edit button is clicked
  }
}