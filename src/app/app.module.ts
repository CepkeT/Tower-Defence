import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppTowerComponent } from './app-tower/app-tower.component';
import {NgOptimizedImage} from "@angular/common";
import {AppEnemyTestComponent} from "./app-enemy-test/app-enemy-test.component";
import { EnemyExampleComponent } from './enemy-example/enemy-example.component';
import { TowerExampleComponent } from './tower-example/tower-example.component';

@NgModule({
  declarations: [
    AppComponent,
    AppTowerComponent,
    AppEnemyTestComponent,
    EnemyExampleComponent,
    TowerExampleComponent
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
