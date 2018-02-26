import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SiteComponent } from './site.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './header/navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { CultosComponent } from './cultos/cultos.component';
import { MensagemComponent } from './mensagem/mensagem.component';
import { TestemunhosComponent } from './testemunhos/testemunhos.component';
import { PastoresComponent } from './pastores/pastores.component';
import { ContatoComponent } from './contato/contato.component';
import { RedeSocialComponent } from './rede-social/rede-social.component';
import { FooterComponent } from './footer/footer.component';
import { DivHrComponent } from './div-hr/div-hr.component';
import { SobreComponent } from './subpastas/igreja/sobre/sobre.component';
import { SiteRoutingModule } from './site.routing.module';
import { KidsComponent } from './subpastas/ministerios/kids/kids.component';
import { AdolescenteComponent } from './subpastas/ministerios/adolescente/adolescente.component';
import { JovensComponent } from './subpastas/ministerios/jovens/jovens.component';
import { DiasCelulasComponent } from './subpastas/celulas/dias-celulas/dias-celulas.component';
import { LiderComponent } from './subpastas/igreja/lider/lider.component';
import { LocalizacaoComponent } from './subpastas/igreja/localizacao/localizacao.component';
import { HomensComponent } from './subpastas/ministerios/homens/homens.component';
import { MulheresComponent } from './subpastas/ministerios/mulheres/mulheres.component';
import { FamiliaComponent } from './subpastas/ministerios/familia/familia.component';
import { OracaoComponent } from './cultos/cultos02/oracao/oracao.component';
import { ProfeticaComponent } from './cultos/cultos02/profetica/profetica.component';
import { EnsinoComponent } from './cultos/cultos02/ensino/ensino.component';
import { EscolaComponent } from './cultos/cultos02/escola/escola.component';
import { CelebracaoComponent } from './cultos/cultos02/celebracao/celebracao.component';

@NgModule({
  imports: [
    CommonModule,
    SiteRoutingModule,
    FormsModule
  ],
  declarations: [DivHrComponent,SiteComponent, HeaderComponent, NavbarComponent, CarouselComponent, CultosComponent, MensagemComponent, TestemunhosComponent, PastoresComponent, ContatoComponent, RedeSocialComponent, FooterComponent, SobreComponent, KidsComponent, AdolescenteComponent, JovensComponent,DiasCelulasComponent, LiderComponent,LocalizacaoComponent, HomensComponent, MulheresComponent, FamiliaComponent, OracaoComponent, ProfeticaComponent, EnsinoComponent, EscolaComponent, CelebracaoComponent ],
  exports: [DivHrComponent, SiteComponent, HeaderComponent, NavbarComponent, CarouselComponent, CultosComponent, MensagemComponent, TestemunhosComponent, PastoresComponent,  ContatoComponent, RedeSocialComponent, FooterComponent, SobreComponent, KidsComponent, AdolescenteComponent,JovensComponent, DiasCelulasComponent, LiderComponent, LocalizacaoComponent, HomensComponent, MulheresComponent, FamiliaComponent, OracaoComponent, ProfeticaComponent, EnsinoComponent, EscolaComponent, CelebracaoComponent],
})
export class SiteModule { }
