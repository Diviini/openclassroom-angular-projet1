import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SnapFaceListComponent } from "./components/snap-face-list/snap-face-list.component";
import { NewSnapFaceComponent } from "./components/new-snap-face/new-snap-face.component";
import { SingleSnapfaceComponent } from "./components/single-snapface/single-snapface.component";
import { AuthGuard } from "../core/guards/auth.gard";

const routes: Routes = [
    
    { path: 'create'  , component: NewSnapFaceComponent   , canActivate: [AuthGuard]},
    { path: ':id'     , component: SingleSnapfaceComponent, canActivate: [AuthGuard]},
    { path: ''        , component: SnapFaceListComponent  , canActivate: [AuthGuard]},
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