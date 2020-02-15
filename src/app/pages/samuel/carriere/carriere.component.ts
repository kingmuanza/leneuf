import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carriere',
  templateUrl: './carriere.component.html',
  styleUrls: ['./carriere.component.scss']
})
export class CarriereComponent implements OnInit {


  constructor(private router: Router) { }

  ngOnInit() {
  }

  ouvrir(id) {
    this.router.navigate(['samuel', 'carriere', id]);
  }

}
