import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlBasicComponent } from './html-basic.component';

describe('HtmlBasicComponent', () => {
  let component: HtmlBasicComponent;
  let fixture: ComponentFixture<HtmlBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HtmlBasicComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HtmlBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
