import { Routes } from '@angular/router';
import { LiveScoreComponent } from './pages/live-score/live-score.component';
import { HomeComponent } from './pages/home/home.component';
import { PointTableComponent } from './pages/point-table/point-table.component';
import { AllMatchesComponent } from './pages/all-matches/all-matches.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'live',
        pathMatch:'full'
    },
    {
        path:'live',
        component:LiveScoreComponent,
        title:'Live Score | CricketInfo'
    },{
        path:'home',
        component:HomeComponent,
        title:'Home | CricketInfo'
    },
    {
        path:"point-table",
        component:PointTableComponent,
        title:'CWC2024 Point Table | CricketInfo'
    },
    {
        path:"all-matches",
        component:AllMatchesComponent,
        title:'Matches History | CricketInfo'
     }
];
