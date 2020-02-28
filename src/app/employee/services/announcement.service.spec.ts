import { TestBed, inject } from '@angular/core/testing';

import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { AnnouncementService } from './announcement.service';

// describe('AnnouncementService', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports: [HttpClientModule, HttpClientTestingModule],
//       providers: [AnnouncementService]
//     });
//   });

//   it('should be created', inject([AnnouncementService], (service: AnnouncementService) => {
//     expect(service).toBeTruthy();
//   }));
// });
