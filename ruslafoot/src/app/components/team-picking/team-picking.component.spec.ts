import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamPickingComponent } from './team-picking.component';

describe('TeamPickingComponent', () => {
  let component: TeamPickingComponent;
  let fixture: ComponentFixture<TeamPickingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamPickingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamPickingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
