import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisibleTodoListComponent } from './containers/visible-todo-list/visible-todo-list.component';

const routes: Routes = [
  {
    path: ':filter',
    component: VisibleTodoListComponent,
  },
  {
    path: '',
    redirectTo: 'all',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      initialNavigation: 'enabled',
      relativeLinkResolution: 'legacy',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
