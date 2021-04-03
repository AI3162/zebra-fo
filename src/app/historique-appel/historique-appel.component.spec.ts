import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriqueAppelComponent } from './historique-appel.component';

describe('HistoriqueAppelComponent', () => {
  let component: HistoriqueAppelComponent;
  let fixture: ComponentFixture<HistoriqueAppelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoriqueAppelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriqueAppelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
