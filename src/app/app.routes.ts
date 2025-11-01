import { Routes } from '@angular/router';
import { Component } from '@angular/core';
import { HomePages } from './features/homePages/homePages';
import { PerfilPages as PefilPage } from './features/perfilPages/perfilPages';


export const routes: Routes = [
     {
            path: '',
            component: HomePages

        },


        {
            path: 'Perfil',
            component: PefilPage
}


];
