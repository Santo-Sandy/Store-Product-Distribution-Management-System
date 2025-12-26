import { Routes } from '@angular/router';
import { Home } from './Pages/home/home';
import { About } from './Pages/about/about';
import { Settings } from './Pages/settings/settings';
import { Stores } from './Pages/stores/stores';
import { Suppliers } from './Pages/suppliers/suppliers';
import { Hubs } from './Pages/hubs/hubs';
import { Depos } from './Pages/depos/depos';
import { Progress } from './Pages/progress/progress';
import { Trackproduct } from './Pages/progress/trackproduct/trackproduct';

export const routes: Routes = [
    {
        path:'',
        component: Home,
    },
    {
        path:'home',
        component: Home,
        title:'Home',
    },
    {
        path:'about',
        component: About,
        title:'About',
    },
    {
        path:'settings',
        component: Settings,
        title:'Settings',
    },
    {
        path:'stores',
        component:Stores,
        title:'Stores',
    },
    {
        path:'suppliers',
        component:Suppliers,
        title:'Suppliers',
    },
    {
        path:'hubs',
        component:Hubs,
        title:'Hubs',
    },
    {
        path:'depos',
        component:Depos,
        title:'Depos',
    },
    {
        path:'progress',
        component:Progress,
        title:'Progress',
        children:[
            {path:'trackproduct/:id',
                component:Trackproduct,
            }
        ]
    },
    {
        path:'trackproduct/:id',
        component:Trackproduct,
    },
    {
        path:'**',
        redirectTo:'home',
    }
];
