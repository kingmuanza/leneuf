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
      id: '14',
      titre: 'LA FONDATION EN PARTENARIAT AVEC BRUSSELS AIRLINES',
      // tslint:disable-next-line: max-line-length
      contenu: 'Samuel Eto’o dispensera des séances de coaching aux jeunes de la commune de Bruxelles ',
      image: '../../../../assets/img/bru1.jpg',
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
      id: '1',
      titre: 'Eto\'o à Harvard',
      contenu: 'Samuel Eto’o va ajouter une ligne à son CV en passant par la prestigieuse université d’Harvard aux Etats-Unis.',
      image: '../../../../assets/img/harvard.JPG',
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
    },
    {
      id: '15',
      titre: 'ETO’O ET LE FOND MONDIAL, CONTRE LE PALUDISME',
      // tslint:disable-next-line: max-line-length
      contenu: '« Le paludisme ne m’a pas vaincu. Ne le laissons pas en vaincre d’autres »',
      image: '../../../../assets/img/palu2.png',
      lien: ['']
    },
    {
      id: '16',
      titre: 'SAMUEL ETO’O, AMBASSADEUR DE L’UNICEF',
      // tslint:disable-next-line: max-line-length
      contenu: 'Samuel Eto’o a été officiellement intronisé ambassadeur de bonne volonté par l’UNICEF Cameroun',
      image: '../../../../assets/img/uni1.png',
      lien: ['']
    },
    {
      id: '17',
      titre: 'SAMUEL ETO’O ET LA FIFA AU LIBAN',
      // tslint:disable-next-line: max-line-length
      contenu: 'Samuel Eto’o en compagnie du président de la FIFA au chevet des enfants',
      image: '../../../../assets/img/fif4.png',
      lien: ['']
    },
    {
      id: '18',
      titre: 'Délégation de la FIFA et Eto’o en visite en Sierra Leone et au Ghana',
      // tslint:disable-next-line: max-line-length
      contenu: 'Samuel Eto’o has just completed a visit to Sierra Leone and Ghana',
      image: '../../../../assets/img/sierra5.png',
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
