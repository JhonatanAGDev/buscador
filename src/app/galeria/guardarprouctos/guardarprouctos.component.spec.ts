import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarprouctosComponent } from './guardarprouctos.component';

describe('GuardarprouctosComponent', () => {
  let component: GuardarprouctosComponent;
  let fixture: ComponentFixture<GuardarprouctosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuardarprouctosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardarprouctosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
