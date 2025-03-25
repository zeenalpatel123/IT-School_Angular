import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlIntroductionComponent } from './html-introduction.component';

describe('HtmlIntroductionComponent', () => {
  let component: HtmlIntroductionComponent;
  let fixture: ComponentFixture<HtmlIntroductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlIntroductionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlIntroductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
