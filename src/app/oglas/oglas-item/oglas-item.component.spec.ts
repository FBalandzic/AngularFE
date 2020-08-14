import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OglasItemComponent } from './oglas-item.component';

describe('OglasItemComponent', () => {
  let component: OglasItemComponent;
  let fixture: ComponentFixture<OglasItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OglasItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OglasItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
