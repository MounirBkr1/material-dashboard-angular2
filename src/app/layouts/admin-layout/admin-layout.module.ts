import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';

import { NotificationsComponent } from '../../notifications/notifications.component';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';

import {NotfoundComponent} from "../../notfound/notfound.component";
import {StudentComponent} from "../../student/student.component";
import {ProfesseurComponent} from "../../professeur/professeur.component";
import {NotesComponent} from "../../notes/notes.component";
import {ProgrammesComponent} from "../../programmes/programmes.component";
import {NouveautesComponent} from "../../nouveautes/nouveautes.component";
import {InstancesComponent} from "../../instances/instances.component";
import {ContactezNousComponent} from "../../contactez-nous/contactez-nous.component";
import {ComponentsModule} from "../../components/components.module";


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    MatTooltipModule,
    MatSelectModule,
    MatFormFieldModule,
    MatRippleModule,
    MatInputModule,
    MatButtonModule,
    ComponentsModule


  ],
  declarations: [
    DashboardComponent,
    StudentComponent,
    ProfesseurComponent,
    NotesComponent,
    ProgrammesComponent,
    NouveautesComponent,
    NotificationsComponent,
    InstancesComponent,
    NotfoundComponent,
    ContactezNousComponent
  ]
})

export class AdminLayoutModule {}
