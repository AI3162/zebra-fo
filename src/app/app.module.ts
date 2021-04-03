import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule, HttpHeaders} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TestComponentComponent} from './test-component/test-component.component';
import {ConnexionComponent} from './connexion/connexion.component';
import {HistoriqueAppelComponent} from './historique-appel/historique-appel.component';

const appRoutes: Routes = [
  {path: '', component: ConnexionComponent},
  {path: 'historique', component: HistoriqueAppelComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    ConnexionComponent,
    HistoriqueAppelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {
}
