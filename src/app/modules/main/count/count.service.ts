import { Injectable } from '@angular/core';
import { Count } from './count.model';

@Injectable({
  providedIn: 'root'
})
export class CountService {
  private counts: Count[] = [
    new Count(1, 10, 5, 20, 3, new Date(2023, 3, 10)),
    new Count(2, 8, 10, 15, 2, new Date(2023, 4, 15)),
    new Count(3, 12, 7, 25, 5, new Date(2023, 4, 17))
  ];

  constructor() { }

  getCounts() {
    return this.counts.slice();
  }

  addCount(count: Count) {
    this.counts.push(count);
  }

  updateCount(index: number, newCount: Count) {
    this.counts[index] = newCount;
  }

  deleteCount(index: number) {
    this.counts.splice(index, 1);
  }
}
