import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Er404Page } from './er404.page';

describe('Er404Page', () => {
  let component: Er404Page;
  let fixture: ComponentFixture<Er404Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Er404Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
