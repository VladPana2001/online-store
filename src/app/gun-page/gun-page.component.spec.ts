import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GunPageComponent } from './gun-page.component';

describe('GunPageComponent', () => {
  let component: GunPageComponent;
  let fixture: ComponentFixture<GunPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GunPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GunPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
