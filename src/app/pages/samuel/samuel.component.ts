import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-samuel',
  templateUrl: './samuel.component.html',
  styleUrls: ['./samuel.component.scss']
})
export class SamuelComponent implements OnInit {

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
