import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloDescComponent } from './articulo-desc.component';

describe('ArticuloDescComponent', () => {
  let component: ArticuloDescComponent;
  let fixture: ComponentFixture<ArticuloDescComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticuloDescComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArticuloDescComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
