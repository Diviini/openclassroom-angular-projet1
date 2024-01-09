import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../services/auth.service";

export const AuthGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree => {

    const router: Router    = inject(Router);
    const auth: AuthService = inject(AuthService);

    if(auth.getToken()) {
        return true;
    } else {
        router.navigate(['/auth/login']);
        return false;
    }

}

/* Ancienne version ( déprécié )

@Injectable({
    providedIn: "root"
})

export class AuthGuard implements CanActivate {

    constructor(private auth: AuthService,
                private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(this.auth.getToken()) {
            return true;
        } else {
            this.router.navigateByUrl('/auth/login');
            return false;
        }
    }
    
}*/