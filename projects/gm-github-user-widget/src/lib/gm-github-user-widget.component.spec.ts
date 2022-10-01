import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GmGithubUserWidgetComponent } from './gm-github-user-widget.component';

describe('GmGithubUserWidgetComponent', () => {
  let component: GmGithubUserWidgetComponent;
  let fixture: ComponentFixture<GmGithubUserWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GmGithubUserWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GmGithubUserWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
