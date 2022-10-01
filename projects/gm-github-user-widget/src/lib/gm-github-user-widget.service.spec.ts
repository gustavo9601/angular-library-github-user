import { TestBed } from '@angular/core/testing';

import { GmGithubUserWidgetService } from './gm-github-user-widget.service';

describe('GmGithubUserWidgetService', () => {
  let service: GmGithubUserWidgetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GmGithubUserWidgetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
