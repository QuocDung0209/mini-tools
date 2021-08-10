import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HighlightCodeComponent } from './highlight-code/highlight-code.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'highlight-code'
  },
  {
    path: 'highlight-code',
    component: HighlightCodeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
