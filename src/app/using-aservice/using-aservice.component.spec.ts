import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsingAServiceComponent } from './using-aservice.component';

describe('UsingAServiceComponent', () => {
  let component: UsingAServiceComponent;
  let fixture: ComponentFixture<UsingAServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsingAServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsingAServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
