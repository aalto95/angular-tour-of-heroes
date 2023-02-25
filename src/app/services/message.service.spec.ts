import { TestBed } from '@angular/core/testing';

import { MessageService } from './message.service';

describe('MessageService', () => {
  let service: MessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should clear messages', () => {
    service.clear();
    expect(service.messages).toHaveSize(0);
  });

  it('should push message', () => {
    service.add('message');
    expect(service.messages).toHaveSize(1);
  });
});
