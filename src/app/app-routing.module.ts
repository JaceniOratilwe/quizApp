import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'general', loadChildren: './general/general.module#GeneralPageModule' },
  { path: 'brain', loadChildren: './brain/brain.module#BrainPageModule' },
  { path: 'science', loadChildren: './science/science.module#SciencePageModule' },
  { path: 'g1', loadChildren: './g1/g1.module#G1PageModule' },
  { path: 'g2', loadChildren: './g2/g2.module#G2PageModule' },
  { path: 'g3', loadChildren: './g3/g3.module#G3PageModule' },
  { path: 'g4', loadChildren: './g4/g4.module#G4PageModule' },
  { path: 'total', loadChildren: './total/total.module#TotalPageModule' },
  { path: 's1', loadChildren: './s1/s1.module#S1PageModule' },
  { path: 's2', loadChildren: './s2/s2.module#S2PageModule' },
  { path: 's3', loadChildren: './s3/s3.module#S3PageModule' },
  { path: 's4', loadChildren: './s4/s4.module#S4PageModule' },
  { path: 'tot-science', loadChildren: './tot-science/tot-science.module#TotSciencePageModule' },
  { path: 'b1', loadChildren: './b1/b1.module#B1PageModule' },
  { path: 'b2', loadChildren: './b2/b2.module#B2PageModule' },
  { path: 'b3', loadChildren: './b3/b3.module#B3PageModule' },
  { path: 'b4', loadChildren: './b4/b4.module#B4PageModule' },
  { path: 'b4-tot', loadChildren: './b4-tot/b4-tot.module#B4TotPageModule' },
  { path: 'correct-g', loadChildren: './correct-g/correct-g.module#CorrectGPageModule' },
  { path: 'correct-s', loadChildren: './correct-s/correct-s.module#CorrectSPageModule' },
  { path: 'correctb', loadChildren: './correctb/correctb.module#CorrectbPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
