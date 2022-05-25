import { Component } from '@angular/core';
import { ConfigService } from './frame-work/core/operation-service.ts/base-service/config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app-queiz';

  constructor(public configService : ConfigService) { }
     
  
}
