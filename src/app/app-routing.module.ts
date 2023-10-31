import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SnapFaceListComponent } from "./snaps-face/components/snap-face-list/snap-face-list.component";
import { LandingPageComponent } from "./landing-page/components/landing-page/landing-page.component";
import { SingleSnapfaceComponent } from "./snaps-face/components/single-snapface/single-snapface.component";
import { NewSnapFaceComponent } from "./snaps-face/components/new-snap-face/new-snap-face.component";

const routes: Routes = [
    { path: 'snapFaces'         , component: SnapFaceListComponent  },
    { path: ''                  , component: LandingPageComponent   },
    { path: 'snapFaces/:id'     , component: SingleSnapfaceComponent},
    { path: 'create'            , component: NewSnapFaceComponent   }
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