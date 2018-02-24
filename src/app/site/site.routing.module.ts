import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SiteComponent } from "./site.component";
import { SobreComponent } from "./subpastas/igreja/sobre/sobre.component";
import { AgendaComponent } from "./subpastas/igreja/agenda/agenda.component";
import { OndeEstamosComponent } from "./subpastas/igreja/onde-estamos/onde-estamos.component";
import { KidsComponent } from "./subpastas/ministerios/kids/kids.component";
import { AdolescenteComponent } from "./subpastas/ministerios/adolescente/adolescente.component";
import { JovensComponent } from "./subpastas/ministerios/jovens/jovens.component";
import { DiasCelulasComponent } from "./subpastas/celulas/dias-celulas/dias-celulas.component";

import { BlogComponent } from "./pastores/blog/blog.component";
import { LeiaMaisComponent } from "./mensagem/leia-mais/leia-mais.component";
import { DownloadComponent } from "./mensagem/download/download.component";
import { Blog2Component } from "./pastores/blog-02/blog-02.component";
import { Blog3Component } from "./pastores/blog-03/blog-03.component";

const route = [
    {path: 'sobre', component: SobreComponent},
    {path: 'agenda', component: AgendaComponent},
    {path: 'onde', component: OndeEstamosComponent},
    {path: 'kids', component: KidsComponent},
    {path: 'adolescente', component: AdolescenteComponent},
    {path: 'jovens', component: JovensComponent},
    {path: 'dias_celulas', component: DiasCelulasComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'leia-mais', component: LeiaMaisComponent},
    {path: 'download', component: DownloadComponent},
    {path: 'blog-02', component: Blog2Component},
    {path: 'blog-03', component: Blog3Component},
];

@NgModule({
    imports:[
        RouterModule.forChild(route)
    ],
    exports:[RouterModule]
})
export class SiteRoutingModule {}