import { Component } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  eleve =
    [{
      "nom":"Kiry",
      "prenom":"Jean",
      "classe":"SIO2",
      "date_naissance":"28-12-2000",
      "age":22,
      "description":"blkfjwlxkdffgns:dflhgsdkjfgh;sdjkfgh;kdjfgh",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwhzKZPUre0PW1BEW-xGX_FejvBiophPPgEQ&usqp=CAU"
  },
  {
      "nom":"Kiroule",
      "prenom":"Pierre",
      "classe":"SIO2",
      "date_naissance":"03-03-2000",
      "age":22,
      "description":"blkfjwlxkdffgns:dflhgsdkjfgh;sdjkfgh;kdjfgh",
      image : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaANtept27EFdcIQ62k2W2VCkpXSq0iDxT4w&usqp=CAU"
  }]
  constructor(private router: Router) {}

  affDetail(item)
  {
    let navigationExtras: NavigationExtras = {
      state : {
      param1: item,
      }
      };
    this.router.navigate(['/detail'],navigationExtras);
  }
    listfilms()
  {
    let navExtras: NavigationExtras = {};
      this.router.navigate(['/film'], navExtras);
  }
}
