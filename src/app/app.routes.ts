import { Routes } from '@angular/router';

import { HomePages } from './features/homePages/homePages';
import { PerfilPages as PefilPage } from './features/perfilPages/perfilPages';


export const routes: Routes = [
     {
            path: '',
            component: HomePages

        },


        {
            path: 'perfil',
            component: PefilPage
}


];
