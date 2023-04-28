import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdLinkComponent } from './ad-link.component';

describe('AdLinkComponent', () => {
  let component: AdLinkComponent;
  let fixture: ComponentFixture<AdLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdLinkComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
