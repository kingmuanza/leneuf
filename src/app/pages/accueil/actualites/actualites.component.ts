import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-actualites',
  templateUrl: './actualites.component.html',
  styleUrls: ['./actualites.component.scss']
})
export class ActualitesComponent implements OnInit, OnChanges {

  @Input() nombre: number;
  actualites = [
    {
      id: '1',
      titre: 'Eto\'o à Harvard',
      contenu: 'Samuel Eto’o va ajouter une ligne à son CV en passant par la prestigieuse université d’Harvard aux Etats-Unis.',
      image: '../../../../assets/img/harvard.JPG',
      lien: ['']
    },
    {
      id: '2',
      titre: 'AMBASSADEUR DU MONDIAL 2022',
      // tslint:disable-next-line: max-line-length
      contenu: 'L\'ancien capitaine des Lions Indomptables, Samuel Eto\'o a été désigné nouvel ambassadeur de la coupe du monde 2022 qui se tiendra au Qatar',
      image: '../../../../assets/img/projet_qatar.jpg',
      lien: ['']
    },
    {
      id: '3',
      titre: 'FPSE LUTTE CONTRE LE YELLOW BLU RESSORT',
      // tslint:disable-next-line: max-line-length
      contenu: 'Depuis mars 2015, Samuel Eto\'o a lancé "Yellow Whistle Blower FC", une initiative de collecte de fonds afin de venir en aide aux victimes de Boko Haram.',
      image: '../../../../assets/img/fpse.jpg',
      lien: ['']
    },
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
      id: '6',
      titre: 'SAMUEL ETO’O EXPLIQUE SES PROJETS AUX DEPUTES IVOIRIENS',
      // tslint:disable-next-line: max-line-length
      contenu: 'Guillaume Soro et le footballeur international Samuel Eto`o ont eu une séance de travail ce lundi',
      image: '../../../../assets/img/ivoire.png',
      lien: ['']
    },
    {
      id: '7',
      titre: 'LA FONDATION AU CHEVET DE NOBERT OWONA',
      // tslint:disable-next-line: max-line-length
      contenu: 'Nobert Owona, sans le moindre sou et très malade, a reçu l’aide de LA fondation, sous l’égide de son président Samuel Eto’o Fils.',
      image: '../../../../assets/img/norbert.jpg',
      lien: ['']
    },
    {
      id: '8',
      titre: 'LA LEGENDE SAMUEL ETO’O ET LA FONDATION FIFA',
      // tslint:disable-next-line: max-line-length
      contenu: 'La Fondation FIFA va soutenir 93 projets sociaux à travers le monde',
      image: '../../../../assets/img/etoolesenfants.jpg',
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
    this.router.navigate(['actualites', actualite.id]);
  }

}
