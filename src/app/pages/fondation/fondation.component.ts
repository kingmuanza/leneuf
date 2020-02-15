import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fondation',
  templateUrl: './fondation.component.html',
  styleUrls: ['./fondation.component.scss']
})
export class FondationComponent implements OnInit {

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
