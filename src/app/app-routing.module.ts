import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainContentComponent } from './pages/main-content/main-content.component';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';
import { ErrorPageComponent } from './pages/error-page/error-page.component';

const routes: Routes = [
  {path: "", component: MainLayoutComponent, children:[
    {path:"", redirectTo: 'all', pathMatch: 'full'},
    {path:"all", component: MainContentComponent},
    {path:"notes", component: MainContentComponent},
    {path:"saves", component: MainContentComponent},
    {path:"tags", component: MainContentComponent},
    {path:"trash", component: MainContentComponent},
    {path:"**", pathMatch: 'full', component: ErrorPageComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
