import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import StorageHelper from 'src/app/libs/helpers/storage.helper';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  username: string = "";
  password: string = "";

  constructor(public api: ApiService, private router: Router) { }

  ngOnInit(): void {
  }

  onClick() {
    this.api.login(this.username, this.password).subscribe({
      next:(resp) =>{
        StorageHelper.setItem('session',resp)
        this.router.navigate(['search'])
      } 
    })
  }

}
