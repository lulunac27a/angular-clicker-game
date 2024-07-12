import { Component } from '@angular/core';

@Component({
  selector: 'clicker-button',
  standalone: true,
  imports: [],
  templateUrl: './clicker-button.component.html',
  styleUrl: './clicker-button.component.less'
})
export class ClickerButtonComponent {
  count: number = 0;
  count2: number = 0;
  count3: number = 0;
  increaseCount(amount: number = 1) {
    this.count += amount;
  }
  increaseCount2(amount: number = 1) {
    this.count2 += amount * this.count;
  }
  increaseCount3(amount: number = 1) {
    this.count3 += amount * this.count2;
  }
}
