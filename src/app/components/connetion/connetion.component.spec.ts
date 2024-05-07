import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnetionComponent } from './connetion.component';

describe('ConnetionComponent', () => {
  let component: ConnetionComponent;
  let fixture: ComponentFixture<ConnetionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnetionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnetionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
