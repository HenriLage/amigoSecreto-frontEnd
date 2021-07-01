import { SobreComponent } from './home/sobre/sobre.component';
import { ListaPessoasComponent } from './home/lista-pessoas/lista-pessoas.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lista',
    pathMatch: 'full',
  },

  {
    path: 'lista',
    pathMatch: 'full',
    component: ListaPessoasComponent,
  },

  {
    path: 'sobre',
    pathMatch: 'full',
    component: SobreComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
