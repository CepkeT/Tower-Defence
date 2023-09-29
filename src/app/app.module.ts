import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppTowerComponent } from './app-tower/app-tower.component';
import {NgOptimizedImage} from "@angular/common";
import {AppEnemyTestComponent} from "./app-enemy-test/app-enemy-test.component";
import { EnemyExampleComponent } from './enemy-example/enemy-example.component';
import { TowerExampleComponent } from './tower-example/tower-example.component';
import { HpBarComponent } from './hp-bar/hp-bar.component';
import { FirebollComponent } from './fireboll/fireboll.component';

@NgModule({
  declarations: [
    AppComponent,
    AppTowerComponent,
    AppEnemyTestComponent,
    EnemyExampleComponent,
    TowerExampleComponent,
    HpBarComponent,
    FirebollComponent
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage
  ],
  providers: [TowerExampleComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
