import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OglasListComponent } from './oglas-list.component';

describe('OglasListComponent', () => {
  let component: OglasListComponent;
  let fixture: ComponentFixture<OglasListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OglasListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OglasListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
