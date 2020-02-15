import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.component.html',
  styleUrls: ['./evenements.component.scss']
})
export class EvenementsComponent implements OnInit {

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
