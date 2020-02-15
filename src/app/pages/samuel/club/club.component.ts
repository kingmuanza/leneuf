import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.scss']
})
export class ClubComponent implements OnInit {

  id: string;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramsMap) => {
      const id = paramsMap.get('id');
      if (id) {
        console.log('id');
        console.log(id);
        this.id = id;
      }
    });
  }

  revenir() {
    this.router.navigate(['samuel', 'carriere']);
  }

  ouvrir(id) {

  }
}
