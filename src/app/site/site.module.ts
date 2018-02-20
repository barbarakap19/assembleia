import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteComponent } from './site.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CultosComponent } from './cultos/cultos.component';
import { AovivoComponent } from './cultos/aovivo/aovivo.component';
import { MensagemComponent } from './mensagem/mensagem.component';
import { TestemunhosComponent } from './testemunhos/testemunhos.component';
import { PastoresComponent } from './pastores/pastores.component';
import { BlogComponent } from './pastores/blog/blog.component';
import { ContatoComponent } from './contato/contato.component';
import { RedeSocialComponent } from './rede-social/rede-social.component';
import { FooterComponent } from './footer/footer.component';
import { DivHrComponent } from './div-hr/div-hr.component';
import { SobreComponent } from './sobre/sobre.component';
import { OndeEstamosComponent } from './onde-estamos/onde-estamos.component';
import { AgendaComponent } from './agenda/agenda.component';
import { SiteRoutingModule } from './site.routing.module';
import { KidsComponent } from './subpastas/ministerios/kids/kids.component';
import { AdolescenteComponent } from './subpastas/ministerios/adolescente/adolescente.component';
import { JovensComponent } from './subpastas/ministerios/jovens/jovens.component';
import { DiasCelulasComponent } from './subpastas/celulas/dias-celulas/dias-celulas.component';
import { ResponsaveisComponent } from './subpastas/celulas/responsaveis/responsaveis.component';
import { EncontreCelulasComponent } from './subpastas/celulas/encontre-celulas/encontre-celulas.component';

@NgModule({
  imports: [
    CommonModule,
    SiteRoutingModule
  ],
  declarations: [DivHrComponent,SiteComponent, HeaderComponent, NavbarComponent, CarouselComponent, CultosComponent, AovivoComponent, MensagemComponent, TestemunhosComponent, PastoresComponent, BlogComponent, ContatoComponent, RedeSocialComponent, FooterComponent, SobreComponent, OndeEstamosComponent, AgendaComponent, KidsComponent, AdolescenteComponent, JovensComponent,DiasCelulasComponent, ResponsaveisComponent, EncontreCelulasComponent],
  exports: [DivHrComponent, SiteComponent, HeaderComponent, NavbarComponent, CarouselComponent, CultosComponent, AovivoComponent, MensagemComponent, TestemunhosComponent, PastoresComponent, BlogComponent, ContatoComponent, RedeSocialComponent, FooterComponent, SobreComponent, OndeEstamosComponent, AgendaComponent, KidsComponent, AdolescenteComponent,JovensComponent, DiasCelulasComponent, ResponsaveisComponent, EncontreCelulasComponent],
})
export class SiteModule { }
