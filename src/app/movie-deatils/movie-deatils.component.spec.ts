import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDeatilsComponent } from './movie-deatils.component';

describe('MovieDeatilsComponent', () => {
  let component: MovieDeatilsComponent;
  let fixture: ComponentFixture<MovieDeatilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDeatilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieDeatilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
