import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LandingPageComponent } from "./landing-page/components/landing-page/landing-page.component";

const routes: Routes = [
    { path: ''                  , component: LandingPageComponent   },
    { path: 'snapFaces', loadChildren: () => import('./snaps-face/snaps-face.module').then(m => m.SnapsFaceModule) }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}