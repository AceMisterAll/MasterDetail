import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detailfilm',
  templateUrl: './detailfilm.page.html',
  styleUrls: ['./detailfilm.page.scss'],
})
export class DetailfilmPage implements OnInit {

  film:any;

  constructor(private router : Router,
              private activeRoute : ActivatedRoute) { 
    this.activeRoute.queryParams.subscribe(params => {
      //if (this.router.getCurrentNavigation().extras.state) {
        this.film = this.router.getCurrentNavigation().extras.state.film;
        console.log(this.film)
      //}
      });
    }

  ngOnInit() {
  }

}

 