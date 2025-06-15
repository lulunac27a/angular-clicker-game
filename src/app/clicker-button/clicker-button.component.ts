import { Component } from '@angular/core';

@Component({
    selector: 'clicker-button',
    standalone: true,
    imports: [],
    templateUrl: './clicker-button.component.html',
    styleUrl: './clicker-button.component.less',
})
export class ClickerButtonComponent {
    count: number = 0; //set counter variables to 0
    count2: number = 0;
    count3: number = 0;
    amount: number = 1; //set default amount to 1
    increaseCount(amountSpecified: boolean = false): void {
        //if the amount is specified, increase first counter by specified amount, else increase by 1
        this.count += amountSpecified ? this.amount : 1; //increase first count
    }
    increaseCount2(amountSpecified: boolean = false): void {
        //if the amount is specified, increase second counter by specified amount times first count, else increase by first count
        this.count2 += amountSpecified ? this.amount * this.count : this.count; //increase second count
    }
    increaseCount3(amountSpecified: boolean = false): void {
        //if the amount is specified, increase third counter by specified amount times second count, else increase by second count
        this.count3 += amountSpecified
            ? this.amount * this.count2
            : this.count2; //increase third count
    }
    changeValue(newValue: number): void {
        //set amount value based on new value number
        this.amount = parseInt(String(Math.min(9, Math.max(1, newValue))), 10); //set amount to integer from 1 to 9
    }
    resetCounts(): void {
        //reset all counter values
        this.count = 0; //reset values to 0
        this.count2 = 0;
        this.count3 = 0;
    }
}
