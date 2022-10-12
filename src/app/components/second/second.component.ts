import { Component, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  public character$!: Observable<any>;
  public charName = "rick";

  constructor(private api: ApiService) {
    this.character$ = this.api.searchChar(this.charName).pipe(
      tap(console.log)
    )
   }

  ngOnInit(): void {
  }

  onChange(){
    console.log(this.charName);
    this.character$ = this.api.searchChar(this.charName).pipe(
      tap(console.log)
    )
  }

}
