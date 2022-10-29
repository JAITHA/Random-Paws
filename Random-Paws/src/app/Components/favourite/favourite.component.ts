import { Component, OnInit } from '@angular/core';
import { RandomdogsService } from 'src/app/Services/randomdogs.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss'],
})
export class FavouriteComponent implements OnInit {
  public favpicture: any;
  constructor(private dogService: RandomdogsService) {}

  ngOnInit(): void {
    this.loadFavpic();
  }

  loadFavpic(): void {
    this.dogService.getFavouritepic().subscribe((res) => {
      this.favpicture = res;
    });
  }

  deleteFav(id: number) {
    this.dogService.deletepics(id).subscribe({
      next: (res) => {
        alert('Image Delete Successfully');
        this.loadFavpic();
      },
      error: () => {
        alert('Error while deleting Image');
      },
    });
  }
}
