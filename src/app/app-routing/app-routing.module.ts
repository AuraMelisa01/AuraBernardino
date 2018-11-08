import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { IntroComponent } from '../components/intro/intro.component';
import { SobreMiComponent } from '../components/sobre-mi/sobre-mi.component';
import { HabilidadesComponent } from '../components/habilidades/habilidades.component';
import { PortafolioComponent } from '../components/portafolio/portafolio.component';
import { ContactoComponent } from '../components/contacto/contacto.component';

const routes: Routes = [
  {path: '', component: IntroComponent},
  {path: 'sobre-mi', component: SobreMiComponent},
  {path: 'habilidades', component: HabilidadesComponent},
  {path: 'portafolio', component: PortafolioComponent},
  {path: 'contacto', component: ContactoComponent },
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }
