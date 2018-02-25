import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SiteComponent } from "./site.component";
import { SobreComponent } from "./subpastas/igreja/sobre/sobre.component";
import { KidsComponent } from "./subpastas/ministerios/kids/kids.component";
import { AdolescenteComponent } from "./subpastas/ministerios/adolescente/adolescente.component";
import { JovensComponent } from "./subpastas/ministerios/jovens/jovens.component";
import { DiasCelulasComponent } from "./subpastas/celulas/dias-celulas/dias-celulas.component";
import { LiderComponent } from "./subpastas/igreja/lider/lider.component";
import { LocalizacaoComponent } from "./subpastas/igreja/localizacao/localizacao.component";
import { HomensComponent } from "./subpastas/ministerios/homens/homens.component";
import { MulheresComponent } from "./subpastas/ministerios/mulheres/mulheres.component";
import { FamiliaComponent } from "./subpastas/ministerios/familia/familia.component";

const route = [
    {path: 'sobre', component: SobreComponent},
    {path: 'kids', component: KidsComponent},
    {path: 'adolescente', component: AdolescenteComponent},
    {path: 'jovens', component: JovensComponent},
    {path: 'dias_celulas', component: DiasCelulasComponent},
    {path: 'lider', component: LiderComponent},
    {path: 'localizacao', component: LocalizacaoComponent},
    {path: 'homens', component: HomensComponent},
    {path: 'mulheres', component: MulheresComponent},
    {path: 'familia', component: FamiliaComponent},
];

@NgModule({
    imports:[
        RouterModule.forChild(route)
    ],
    exports:[RouterModule]
})
export class SiteRoutingModule {}