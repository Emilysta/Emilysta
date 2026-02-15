import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyTile } from './technology-tile';

describe('TechnologyTile', () => {
  let component: TechnologyTile;
  let fixture: ComponentFixture<TechnologyTile>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnologyTile]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologyTile);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
