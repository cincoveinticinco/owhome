import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddonsSectionComponent } from './addons-section.component';

describe('AddonsSectionComponent', () => {
  let component: AddonsSectionComponent;
  let fixture: ComponentFixture<AddonsSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddonsSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddonsSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
