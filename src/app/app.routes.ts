import { Routes } from '@angular/router';

import { HomePages } from './features/homePages/homePages';
import { PerfilPages as PefilPage } from './features/perfilPages/perfilPages';
import { ProyectoPage } from './features/ProyectoPage/ProyectoPage';
import { ProyectosPages2 } from './features/ProyectosPages2/ProyectosPages2';
import { Formulario } from './features/Formulario/Formulario/Formulario';


export const routes: Routes = [
        {
            path: '',
            component: HomePages

        },
        {
            path: 'perfile',
            component: PefilPage
        },

        {
            path: 'proyectoPage',
            component: ProyectoPage

        },

        {
            path: 'proyectoPage2',
            component: ProyectosPages2
        },

        {
            path: 'formulario',
            component:Formulario
        }

];
