import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TransactionInputPage } from './transaction-input.page';

describe('TransactionInputPage', () => {
  let component: TransactionInputPage;
  let fixture: ComponentFixture<TransactionInputPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionInputPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
