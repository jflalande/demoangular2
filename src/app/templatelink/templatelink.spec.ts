import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Templatelink } from './templatelink';

describe('Templatelink', () => {
  let component: Templatelink;
  let fixture: ComponentFixture<Templatelink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Templatelink]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Templatelink);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
