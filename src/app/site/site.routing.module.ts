import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SiteComponent } from "./site.component";
import { SobreComponent } from "./sobre/sobre.component";
import { AgendaComponent } from "./agenda/agenda.component";
import { OndeEstamosComponent } from "./onde-estamos/onde-estamos.component";
import { KidsComponent } from "./subpastas/ministerios/kids/kids.component";
import { AdolescenteComponent } from "./subpastas/ministerios/adolescente/adolescente.component";
import { JovensComponent } from "./subpastas/ministerios/jovens/jovens.component";
import { DiasCelulasComponent } from "./subpastas/celulas/dias-celulas/dias-celulas.component";
import { ResponsaveisComponent } from "./subpastas/celulas/responsaveis/responsaveis.component";
import { EncontreCelulasComponent } from "./subpastas/celulas/encontre-celulas/encontre-celulas.component";

const route = [
    {path: 'sobre', component: SobreComponent},
    {path: 'agenda', component: AgendaComponent},
    {path: 'onde', component: OndeEstamosComponent},
    {path: 'kids', component: KidsComponent},
    {path: 'adolescente', component: AdolescenteComponent},
    {path: 'jovens', component: JovensComponent},
    {path: 'dias_celulas', component: DiasCelulasComponent},
    {path: 'responsaveis', component: ResponsaveisComponent},
    {path: 'encontre_celulas', component: EncontreCelulasComponent},
];

@NgModule({
    imports:[
        RouterModule.forChild(route)
    ],
    exports:[RouterModule]
})
export class SiteRoutingModule {}