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
describe('ClickerButtonComponent Additional Tests', () => {
  let component: ClickerButtonComponent;
  let fixture: ComponentFixture<ClickerButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClickerButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ClickerButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should increase count by 1 when amount is not specified', () => {
    component.increaseCount();
    expect(component.count).toEqual(1);
    component.increaseCount();
    expect(component.count).toEqual(2);
  });

  it('should increase count2 by count when amount is not specified', () => {
    component.count = 5;
    component.increaseCount2();
    expect(component.count2).toEqual(5);
    component.increaseCount2();
    expect(component.count2).toEqual(10);
  });

  it('should increase count3 by count2 when amount is not specified', () => {
    component.count2 = 10;
    component.increaseCount3();
    expect(component.count3).toEqual(10);
    component.increaseCount3();
    expect(component.count3).toEqual(20);
  });

  it('should correctly increase counts with specified amount', () => {
    component.changeValue(3);
    component.increaseCount(true);
    expect(component.count).toEqual(3);
    component.count = 2;
    component.increaseCount2(true);
    expect(component.count2).toEqual(6);
    component.count2 = 4;
    component.increaseCount3(true);
    expect(component.count3).toEqual(12);
  });

  it('should handle decimal input for changeValue', () => {
    component.changeValue(4.7);
    expect(component.amount).toEqual(4);
    component.changeValue(8.2);
    expect(component.amount).toEqual(8);
  });

  it('should handle string input for changeValue', () => {
    component.changeValue(Number('5'));
    expect(component.amount).toEqual(5);
    component.changeValue(Number('invalid'));
    expect(component.amount).toEqual(1);
  });

  it('should maintain state across multiple operations', () => {
    component.changeValue(2);
    component.increaseCount(true);
    component.increaseCount2(true);
    expect(component.count).toEqual(2);
    expect(component.count2).toEqual(4);
    component.increaseCount3(true);
    expect(component.count3).toEqual(8);
    component.resetCounts();
    expect(component.count).toEqual(0);
    expect(component.count2).toEqual(0);
    expect(component.count3).toEqual(0);
    expect(component.amount).toEqual(2);
  });
});
