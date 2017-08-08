import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RiversComponent } from './rivers.component';

describe('RiversComponent', () => {
  let component: RiversComponent;
  let fixture: ComponentFixture<RiversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RiversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
