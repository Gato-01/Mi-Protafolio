import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './components/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { RedesComponent } from './components/redes/redes.component';
import { BDComponent } from './components/bd/bd.component';
import { AngularComponent } from './components/angular/angular.component'; // Importa el componente Angular
import { GitHubComponent } from './components/git-hub/git-hub.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'redes', component: RedesComponent },
  {path: 'bd', component: BDComponent },
  {path: 'Angular',component: AngularComponent},
  {path: 'GitHub', component: GitHubComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
