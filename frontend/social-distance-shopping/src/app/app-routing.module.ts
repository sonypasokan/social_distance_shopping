import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './login/login.component'
import { NgModule } from '@angular/core'


const appRoutes : Routes = [
    { path : '', redirectTo : 'login', pathMatch : 'full'},
    { path : 'login', component : LoginComponent}
]

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})
export class AppRouterModule {

}