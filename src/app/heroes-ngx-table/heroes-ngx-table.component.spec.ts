import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesNgxTableComponent } from './heroes-ngx-table.component';

describe('HeroesNgxTableComponent', () => {
  let component: HeroesNgxTableComponent;
  let fixture: ComponentFixture<HeroesNgxTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesNgxTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesNgxTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
