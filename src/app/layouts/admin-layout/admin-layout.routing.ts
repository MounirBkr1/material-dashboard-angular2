import {Routes} from '@angular/router';

import {DashboardComponent} from '../../dashboard/dashboard.component';

import {NotificationsComponent} from '../../notifications/notifications.component';

import {NotfoundComponent} from "../../notfound/notfound.component";

import {StudentComponent} from "../../student/student.component";
import {ProfesseurComponent} from "../../professeur/professeur.component";
import {NotesComponent} from "../../notes/notes.component";
import {ProgrammesComponent} from "../../programmes/programmes.component";
import {NouveautesComponent} from "../../nouveautes/nouveautes.component";
import {InstancesComponent} from "../../instances/instances.component";
import {ContactezNousComponent} from "../../contactez-nous/contactez-nous.component";
import {AdminLayoutComponent} from "./admin-layout.component";
import {RenseignementGeneraleComponent} from "../../student/renseignement-generale/renseignement-generale.component";
import {RenseignementFamilialeComponent} from "../../student/renseignement-familiale/renseignement-familiale.component";
import {RenseignementNumeriquesComponent} from "../../student/renseignement-numeriques/renseignement-numeriques.component";
import {CartesComponent} from "../../student/cartes/cartes.component";
import {DisciplineComponent} from "../../student/discipline/discipline.component";
import {StagesComponent} from "../../student/stages/stages.component";


export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    //}]},
    // {
    //     path: '',
    //     children: [
    //         {
    //           path: 'etudiants',
    //           component: UserProfileComponent
    //         },
    //     ]
    // },
    //     //{
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }

    {path: 'acceuil', component: DashboardComponent},
    {path: 'etudiants', component: StudentComponent},

    {path: 'professeurs', component: ProfesseurComponent},
    {path: 'notes', component: NotesComponent},
    {path: 'programmes', component: ProgrammesComponent},
    {path: 'nouveautes', component: NouveautesComponent},
    {path: 'notifications', component: NotificationsComponent},
    {path: 'instances', component: InstancesComponent},
    {path: 'contacs-us', component: ContactezNousComponent},
    // {path: "**", component: NotfoundComponent},




];
