import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgBootstrapExtComponent } from './ng-bootstrap-ext.component';

describe('NgBootstrapExtComponent', () => {
  let component: NgBootstrapExtComponent;
  let fixture: ComponentFixture<NgBootstrapExtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgBootstrapExtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgBootstrapExtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
