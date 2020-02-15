import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { SamuelComponent } from './pages/samuel/samuel.component';
import { FondationComponent } from './pages/fondation/fondation.component';
import { ProjetsComponent } from './pages/projets/projets.component';
import { NosActualitesComponent } from './pages/nos-actualites/nos-actualites.component';
import { NosRealisationsComponent } from './pages/nos-realisations/nos-realisations.component';
import { EvenementsComponent } from './pages/evenements/evenements.component';
import { PartenairesComponent } from './pages/partenaires/partenaires.component';
import { SoutenirComponent } from './pages/soutenir/soutenir.component';
import { ClubComponent } from './pages/samuel/club/club.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'projets', component: ProjetsComponent },
  { path: 'actualites', component: NosActualitesComponent },
  { path: 'actualites/:id', component: NosActualitesComponent },
  { path: 'realisations', component: NosRealisationsComponent },
  { path: 'realisations/:id', component: NosRealisationsComponent },
  { path: 'evenements', component: EvenementsComponent },
  { path: 'partenaires', component: PartenairesComponent },
  { path: 'soutenir', component: SoutenirComponent },
  { path: 'samuel', component: SamuelComponent },
  { path: 'samuel/:id', component: SamuelComponent },
  { path: 'samuel/carriere/:id', component: ClubComponent },
  { path: 'fondation', component: FondationComponent },
  { path: 'fondation/:id', component: FondationComponent },
  { path: '**', redirectTo: 'accueil' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
