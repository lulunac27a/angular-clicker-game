import { Component } from '@angular/core';

@Component({
  selector: 'clicker-button',
  standalone: true,
  imports: [],
  templateUrl: './clicker-button.component.html',
  styleUrl: './clicker-button.component.less'
})
export class ClickerButtonComponent {
  count = 0;
  increaseCount(amount: number = 1) {
    this.count += amount;
  }

}
