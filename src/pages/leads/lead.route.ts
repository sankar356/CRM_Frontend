import { Routes } from "@angular/router";
import { LeadsComponent } from "./leads.component";
import { AddleadComponent } from "./addlead/addlead.component";
import { ViewleadsComponent } from "./viewleads/viewleads.component";
import { EditleadComponent } from "./editlead/editlead.component";
    

export const LEAD_ROUTE: Routes = [
    { path: '', component: LeadsComponent },
    {path:'creatlead', component:AddleadComponent},
    {path:'view_lead/:id', component:ViewleadsComponent},
    {path:'edit_lead/:id', component:EditleadComponent},
]