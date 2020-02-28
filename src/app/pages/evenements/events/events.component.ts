import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit, OnChanges {

  @Input() nombre: number;
  actualites = [
    {
      id: '4',
      titre: 'Médaille de Tolérance',
      // tslint:disable-next-line: max-line-length
      contenu: 'ETO’O, premier Sportif à recevoir la médaille de Tolérance',
      image: '../../../../assets/img/tolerance.jpg',
      lien: ['']
    },
    {
      id: '5',
      titre: 'GALA Fondation SAMUEL ETO’O',
      // tslint:disable-next-line: max-line-length
      contenu: 'GALA de la Fondation SAMUEL ETO’O en avril 2018',
      image: '../../../../assets/img/gala.jpg',
      lien: ['']
    },
    {
      id: '9',
      titre: 'CAMPAGNE DE VACCINATION AVEC L’UNICEF AU CAMEROUN',
      // tslint:disable-next-line: max-line-length
      contenu: 'Eto’o visite l’hôpital de Bonassama',
      image: '../../../../assets/img/camp2.jpg',
      lien: ['']
    },
    {
      id: '10',
      titre: 'SAMUEL ETO’O, AMBASSADEUR DE YOUTH CONNECT',
      // tslint:disable-next-line: max-line-length
      contenu: 'Placer les jeunes au centre du développement national',
      image: '../../../../assets/img/youth1.png',
      lien: ['']
    },
    {
      id: '11',
      titre: 'SAMUEL ETO’O, AMBASSADEUR DE YOUTH CONNECT',
      // tslint:disable-next-line: max-line-length
      contenu: 'France-diaspora: le club Efficience présente "Le gotha noir d\'Europe"',
      image: '../../../../assets/img/eff1.png',
      lien: ['']
    },
    {
      id: '12',
      titre: 'BANDE DESSINEE DE SAMUEL ETO’O',
      // tslint:disable-next-line: max-line-length
      contenu: 'Le footballeur Samuel Eto\'o vient de publier une bande dessinée consacrée à sa carrière',
      image: '../../../../assets/img/bande2.jpg',
      lien: ['']
    },
    {
      id: '13',
      titre: 'LE ETO’O CHARITY MATCH EN TURQUIE',
      // tslint:disable-next-line: max-line-length
      contenu: 'Samuel Eto’o a organisé le 16 juillet en Turquie un match de charité',
      image: '../../../../assets/img/match1.png',
      lien: ['']
    }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ngOnChanges() {
    console.log('this.nombre');
    console.log(this.nombre);
  }

  openActualite(actualite) {
    this.router.navigate(['evenements', actualite.id]);
  }

}
