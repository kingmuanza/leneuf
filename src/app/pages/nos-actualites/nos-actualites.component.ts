import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nos-actualites',
  templateUrl: './nos-actualites.component.html',
  styleUrls: ['./nos-actualites.component.scss']
})
export class NosActualitesComponent implements OnInit {

  id: string;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramsMap) => {
      const id = paramsMap.get('id');
      if (id) {
        this.id = id;
      }

    });
  }

  actualites() {
    this.router.navigate(['actualites']);
  }

}
