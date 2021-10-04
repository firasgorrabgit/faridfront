import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProviderComponent } from './add-provider/add-provider.component';
import { ListProviderComponent } from './list-provider/list-provider.component';
import { UpdateProviderComponent } from './update-provider/update-provider.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthGardServiceAdminService } from './services/auth-gard-service-admin.service';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [ { path: "login", pathMatch: "full", redirectTo: "app-navbar" },
{ path: "listProvider", component: ListProviderComponent ,canActivate: [AuthGuardService]},
 { path: "addProvider", component: AddProviderComponent,canActivate: [AuthGuardService,AuthGardServiceAdminService] },
 { path: "updateProvider/:id", component: UpdateProviderComponent,canActivate: [AuthGuardService] },
 { path: "registration", component: RegistrationComponent },
 { path: 'login', component: LoginComponent },

 { path: 'logout', component: LogoutComponent ,canActivate: [AuthGuardService]},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
