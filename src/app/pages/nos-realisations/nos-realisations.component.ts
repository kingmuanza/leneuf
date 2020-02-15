import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nos-realisations',
  templateUrl: './nos-realisations.component.html',
  styleUrls: ['./nos-realisations.component.scss']
})
export class NosRealisationsComponent implements OnInit {

  id: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramsMap) => {
      const id = paramsMap.get('id');
      if (id) {
        this.id = id;
      }

    });
  }

}
