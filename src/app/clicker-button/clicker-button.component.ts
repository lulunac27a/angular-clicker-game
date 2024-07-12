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
  amount: number = 1;
  increaseCount(amountSpecified: boolean = false) {
    this.count += amountSpecified ? this.amount: 1;
  }
  increaseCount2(amountSpecified: boolean = false) {
    this.count2 += amountSpecified ? this.amount * this.count : this.count;
  }
  increaseCount3(amountSpecified: boolean = false) {
    this.count3 += amountSpecified ? this.amount * this.count2 : this.count2;
  }
  changeValue(newValue: number) {
    this.amount = parseInt(String(Math.min(9, Math.max(1, newValue))));
  }
}
