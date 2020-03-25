import {Router,Route,RouterModule,PreloadAllModules,NoPreloading} from '@angular/router';
import {ModuleWithProviders,Component} from '@angular/core';


import { CodingDesignComponent } from './coding-design/coding-design.component';
import { DocumentationComponent } from './documentation/documentation.component';

const APP_ROUTES=[{
    path:'codingDesign',component: CodingDesignComponent
},
{
  path:'documentation', component: DocumentationComponent
},
];




export const APP_ROUTING : ModuleWithProviders=RouterModule.forRoot(APP_ROUTES,{
  preloadingStrategy:NoPreloading,
});


