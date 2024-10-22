import { Routes } from "@angular/router";
import { LeadsComponent } from "./leads.component";
import { AddleadComponent } from "./addlead/addlead.component";
import { ViewleadsComponent } from "./viewleads/viewleads.component";


export const LEAD_ROUTE: Routes = [
    { path: '', component: LeadsComponent },
    {path:'creatlead', component:AddleadComponent},
    {path:'viewlead', component:ViewleadsComponent},
]