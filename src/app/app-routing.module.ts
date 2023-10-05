import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SnapFaceListComponent } from "./snap-face-list/snap-face-list.component";
import { LandingPageComponent } from "./landing-page/landing-page.component";
import { SingleSnapfaceComponent } from "./single-snapface/single-snapface.component";

const routes: Routes = [
    { path: 'snapFaces', component: SnapFaceListComponent},
    { path: ''         , component: LandingPageComponent },
    { path: 'snapFaces/:id', component: SingleSnapfaceComponent}
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