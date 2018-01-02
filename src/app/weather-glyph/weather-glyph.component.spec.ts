import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherGlyphComponent } from './weather-glyph.component';

describe('WeatherGlyphComponent', () => {
  let component: WeatherGlyphComponent;
  let fixture: ComponentFixture<WeatherGlyphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherGlyphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherGlyphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
