import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickerButtonComponent } from './clicker-button.component';

describe('ClickerButtonComponent', () => {
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should initialize values when app is loaded', () => {
    expect(component.count).toEqual(0);
    expect(component.count2).toEqual(0);
    expect(component.count3).toEqual(0);
  });
  it('should update counts', () => {
    component.increaseCount();
    expect(component.count).toEqual(1);
    component.changeValue(5);
    component.increaseCount(true);
    expect(component.count).toEqual(6);
    component.increaseCount2(true);
    expect(component.count2).toEqual(30);
    component.increaseCount3(true);
    expect(component.count3).toEqual(150);
    component.changeValue(3);
    component.increaseCount3(true);
    expect(component.count3).toEqual(240);
  });
  it('should update non-integer amount values', () => {
    component.changeValue(3.75);
    expect(component.amount).toEqual(3);
  });
  it('should update amount values greater than 9', () => {
    component.changeValue(25);
    expect(component.amount).toEqual(9);
  });
  it('should update amount values less than 1', () => {
    component.changeValue(-7);
    expect(component.amount).toEqual(1);
  });
});
