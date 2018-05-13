import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {HelloWorldService} from "./services/hello-world.service";
import {HttpClientModule} from "@angular/common/http";
import {HelloWorldComponent} from './hello-world/hello-world.component';
import {RankedGroupManagementComponent} from './ranked-group-management/ranked-group-management.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {RankedGroupService} from "./services/ranked-group.service";
import {ReactiveFormsModule} from "@angular/forms";
import {RankedGroupComponent} from './ranked-group/ranked-group.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatCardModule} from "@angular/material";
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';

const appRoutes: Routes = [
    {path: 'ranked-group', component: RankedGroupComponent},
    {path: 'manage-ranked-group', component: RankedGroupManagementComponent},
    {path: '', component: HelloWorldComponent},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    declarations: [
        AppComponent,
        HelloWorldComponent,
        RankedGroupManagementComponent,
        PageNotFoundComponent,
        RankedGroupComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ReactiveFormsModule,
        RouterModule.forRoot(
            appRoutes,
            {enableTracing: true} // <-- debugging purposes only
        ),
        BrowserAnimationsModule,
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatTableModule,
        MatDividerModule
    ],
    providers: [HelloWorldService, RankedGroupService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
