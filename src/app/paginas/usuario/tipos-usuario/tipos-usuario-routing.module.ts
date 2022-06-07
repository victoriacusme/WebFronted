import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TiposUsuarioPage } from './tipos-usuario.page';

const routes: Routes = [
  {
    path: '',
    component: TiposUsuarioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TiposUsuarioPageRoutingModule {}
