import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickerButtonComponent } from './clicker-button.component';

describe('ClickerButtonComponent', () => {
    let component: ClickerButtonComponent; //clicker button component
    let fixture: ComponentFixture<ClickerButtonComponent>; //component fixture

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [ClickerButtonComponent],
        }).compileComponents(); //compile components

        fixture = TestBed.createComponent(ClickerButtonComponent);
        component = fixture.componentInstance;
        fixture.detectChanges(); //detect changes in fixture
    });

    it('should create', () => {
        expect(component).toBeTruthy(); //assert component exists and is truthy
    });
    it('should initialize values when app is loaded', () => {
        expect(component.count).toEqual(0); //assert all component values to 0
        expect(component.count2).toEqual(0);
        expect(component.count3).toEqual(0);
    });
    it('should update counts and reset counts', () => {
        component.increaseCount(); //increase count
        expect(component.count).toEqual(1);
        component.changeValue(5); //change amount value
        component.increaseCount(true); //increase count by specified amount value
        expect(component.count).toEqual(6);
        component.increaseCount2(true);
        expect(component.count2).toEqual(30);
        component.increaseCount3(true);
        expect(component.count3).toEqual(150);
        component.changeValue(3);
        component.increaseCount3(true);
        expect(component.count3).toEqual(240);
        component.resetCounts(); //reset all counter values
        expect(component.count).toEqual(0);
        expect(component.count2).toEqual(0);
        expect(component.count3).toEqual(0);
    });
    it('should update amount values', () => {
        //assert different amount values
        component.changeValue(7);
        expect(component.amount).toEqual(7);
        component.resetCounts();
        expect(component.amount).toEqual(7);
    });
    it('should update non-integer amount values', () => {
        //assert non-integer amount values
        component.changeValue(3.75); //non-integer value
        expect(component.amount).toEqual(3);
    });
    it('should update amount values greater than 9', () => {
        //assert large amount values
        component.changeValue(25); //number greater than 9
        expect(component.amount).toEqual(9);
    });
    it('should update amount values less than 1', () => {
        //assert negative amount values
        component.changeValue(-7); //number less than 1
        expect(component.amount).toEqual(1);
    });
});
