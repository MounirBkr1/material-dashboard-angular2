import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {StudentComponent} from "./student/student.component";
import {ProfesseurComponent} from "./professeur/professeur.component";
import {NotesComponent} from "./notes/notes.component";
import {ProgrammesComponent} from "./programmes/programmes.component";
import {NouveautesComponent} from "./nouveautes/nouveautes.component";
import {NotificationsComponent} from "./notifications/notifications.component";
import {InstancesComponent} from "./instances/instances.component";
import {ContactezNousComponent} from "./contactez-nous/contactez-nous.component";
import {NotfoundComponent} from "./notfound/notfound.component";

const routes: Routes =[
  {
    path: '',
    redirectTo: 'acceuil',
    pathMatch: 'full',
  },
  {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: () => import('./layouts/admin-layout/admin-layout.module').then(m => m.AdminLayoutModule)
    }

    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
