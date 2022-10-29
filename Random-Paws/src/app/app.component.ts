import { Component } from '@angular/core';
import { RandomdogsService } from './Services/randomdogs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{

  constructor(private dosService:RandomdogsService){}
  title = 'Random-Paws';
}
