import { Component, OnInit } from '@angular/core';
import { Router,  NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-film',
  templateUrl: './film.page.html',
  styleUrls: ['./film.page.scss'],
})
export class FilmPage implements OnInit {

  listFilms : any;

  constructor(private router : Router) { 
    fetch('./assets/films-json.json').then(res => res.json())
    .then(json => {
      this.listFilms = json ;
    });
  }

  ngOnInit() {
  }
  DetailFilm(film)
  {
    let navigationExtras: NavigationExtras = {
      state : {
        film: film,
        }
      };
    console.log(film)  
    this.router.navigate(['/detailfilm'],navigationExtras);
  }
}
 