import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SiteComponent } from "./site.component";
import { SobreComponent } from "./sobre/sobre.component";
import { AgendaComponent } from "./agenda/agenda.component";
import { OndeEstamosComponent } from "./onde-estamos/onde-estamos.component";

const route = [
    {path: 'sobre', component: SobreComponent},
    {path: 'agenda', component: AgendaComponent},
    {path: 'onde', component: OndeEstamosComponent},
];

@NgModule({
    imports:[
        RouterModule.forChild(route)
    ],
    exports:[RouterModule]
})
export class SiteRoutingModule {}