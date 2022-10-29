import { Component, OnInit } from '@angular/core';
import { RandomdogsService } from 'src/app/Services/randomdogs.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss'],
})
export class DogsComponent implements OnInit {
  public picture: any;

  constructor(private dogService:RandomdogsService) {}

  ngOnInit(): void {
    this.loadRandomPic();
  }

  loadRandomPic(): void{
    this.dogService.getRandomPic().subscribe(res => {
      console.log(res);
      this.picture = res.message;
    })
  }

  loadmore() {
    window.location.reload();
  }

  
}
