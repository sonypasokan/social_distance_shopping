import { Routes, RouterModule } from '@angular/router'
import { LoginComponent } from './login/login.component'
import { NgModule } from '@angular/core'
import { HomeComponent } from './home/home.component'


const appRoutes : Routes = [
    { path : '', redirectTo : 'home', pathMatch : 'full'},
    { path: 'home', component: HomeComponent},
    { path : 'login', component : LoginComponent}
]

@NgModule({
    imports : [RouterModule.forRoot(appRoutes)],
    exports : [RouterModule]
})
export class AppRouterModule {

}