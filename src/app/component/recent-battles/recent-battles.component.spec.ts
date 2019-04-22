import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentBattlesComponent } from './recent-battles.component';

describe('RecentBattlesComponent', () => {
  let component: RecentBattlesComponent;
  let fixture: ComponentFixture<RecentBattlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentBattlesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentBattlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
