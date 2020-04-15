import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxAuthComponentComponent } from './ngx-auth-component.component';

describe('NgxAuthComponentComponent', () => {
  let component: NgxAuthComponentComponent;
  let fixture: ComponentFixture<NgxAuthComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxAuthComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxAuthComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
