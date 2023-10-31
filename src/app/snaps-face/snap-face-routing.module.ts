import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SnapFaceListComponent } from "./components/snap-face-list/snap-face-list.component";
import { NewSnapFaceComponent } from "./components/new-snap-face/new-snap-face.component";
import { SingleSnapfaceComponent } from "./components/single-snapface/single-snapface.component";

const routes: Routes = [
    
    { path: 'create'  , component: NewSnapFaceComponent   },
    { path: ':id'     , component: SingleSnapfaceComponent},
    { path: ''        , component: SnapFaceListComponent  },
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class SnapFaceRoutingModule {

}