import { TestBed } from '@angular/core/testing';

import { StoreTareasService } from './store-tareas.service';

describe('StoreTareasService', () => {
  let service: StoreTareasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoreTareasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
