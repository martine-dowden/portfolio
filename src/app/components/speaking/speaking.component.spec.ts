import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakingComponent } from './speaking.component';
import { MaterialModule } from '../../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('SpeakingComponent', () => {
  let component: SpeakingComponent;
  let fixture: ComponentFixture<SpeakingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MaterialModule, BrowserAnimationsModule ],
      declarations: [ SpeakingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
