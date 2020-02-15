import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgMetro4Module } from 'node_modules/ng-metro4';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { CarouselComponent } from './pages/accueil/carousel/carousel.component';
import { AproposComponent } from './pages/accueil/apropos/apropos.component';
import { DescriptionComponent } from './pages/accueil/description/description.component';
import { ActualitesComponent } from './pages/accueil/actualites/actualites.component';
import { FooterComponent } from './components/footer/footer.component';
import { SamuelComponent } from './pages/samuel/samuel.component';
import { EnfanceComponent } from './pages/samuel/enfance/enfance.component';
import { CarriereComponent } from './pages/samuel/carriere/carriere.component';
import { FamilleComponent } from './pages/samuel/famille/famille.component';
import { FondationComponent } from './pages/fondation/fondation.component';
import { HistoriqueComponent } from './pages/fondation/historique/historique.component';
import { PresentationComponent } from './pages/fondation/presentation/presentation.component';
import { OrganigrammeComponent } from './pages/fondation/organigramme/organigramme.component';
import { ProjetsComponent } from './pages/projets/projets.component';
import { NosActualitesComponent } from './pages/nos-actualites/nos-actualites.component';
import { NosRealisationsComponent } from './pages/nos-realisations/nos-realisations.component';
import { EvenementsComponent } from './pages/evenements/evenements.component';
import { PartenairesComponent } from './pages/partenaires/partenaires.component';
import { SoutenirComponent } from './pages/soutenir/soutenir.component';
import { LionsComponent } from './pages/samuel/lions/lions.component';
import { CommunautaireComponent } from './pages/nos-realisations/communautaire/communautaire.component';
import { EducationComponent } from './pages/nos-realisations/education/education.component';
import { SanteComponent } from './pages/nos-realisations/sante/sante.component';
import { SportComponent } from './pages/nos-realisations/sport/sport.component';
import { SurvieComponent } from './pages/nos-realisations/survie/survie.component';
import { MotPresiComponent } from './pages/fondation/mot-presi/mot-presi.component';
import { ContactComponent } from './pages/fondation/contact/contact.component';
import { ClubComponent } from './pages/samuel/club/club.component';
import { EventsComponent } from './pages/evenements/events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    CarouselComponent,
    AproposComponent,
    DescriptionComponent,
    ActualitesComponent,
    FooterComponent,
    SamuelComponent,
    EnfanceComponent,
    CarriereComponent,
    FamilleComponent,
    FondationComponent,
    HistoriqueComponent,
    PresentationComponent,
    OrganigrammeComponent,
    ProjetsComponent,
    NosActualitesComponent,
    NosRealisationsComponent,
    EvenementsComponent,
    PartenairesComponent,
    SoutenirComponent,
    LionsComponent,
    CommunautaireComponent,
    EducationComponent,
    SanteComponent,
    SportComponent,
    SurvieComponent,
    MotPresiComponent,
    ContactComponent,
    ClubComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgMetro4Module
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
