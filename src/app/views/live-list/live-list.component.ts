import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Live } from 'src/app/shared/models/live.model';
import { LiveService } from 'src/app/shared/service/live.service';

@Component({
  selector: 'app-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.css']
})
export class LiveListComponent implements OnInit {

  livesPrevious: Live[];
  livesNext: Live[];

  constructor(private liveService: LiveService, private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.getLives();
  }

  getLives() {
    this.liveService.getLivesWithFlag('previous').subscribe(data => {
      this.livesPrevious = data.content;
      this.livesPrevious.forEach(x => {
        x.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(x.liveLink);
      });
    });

    this.liveService.getLivesWithFlag('next').subscribe(data => {
      this.livesNext = data.content;
      this.livesNext.forEach(x => {
        x.urlSafe = this.sanitizer.bypassSecurityTrustResourceUrl(x.liveLink);
      });
    });
  }


}
