import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.scss']
})
export class DescriptionComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  fondation() {
    this.router.navigate(['fondation', 'presentation']);
  }

}
