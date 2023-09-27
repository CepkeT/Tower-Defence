import {AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {EnemyMovement} from 'src/AngularClasses/enemy-movenment';
import { Point } from 'src/AngularClasses/point';
import { TowerExampleComponent } from '../tower-example/tower-example.component';

@Component({
  selector: 'app-enemy-example',
  templateUrl: './enemy-example.component.html',
  styleUrls: ['./enemy-example.component.css']
})

export class EnemyExampleComponent implements AfterViewInit {
    @ViewChild('EnemyImg') _enemyImg: ElementRef;
    @ViewChild('hpBar') _hpBar: ElementRef;
  _movement: EnemyMovement;
   _towerComponent: TowerExampleComponent;
  public constructor(private towerComponent: TowerExampleComponent) {
    this._movement = new EnemyMovement(
        2,
        new Point(window.innerWidth/2 ,window.innerHeight/2),
        new Point(50,50),100);
    this._enemyImg = ViewChild("EnemyImg");
    this._hpBar = ViewChild("hpBar");
    this._towerComponent = towerComponent;

  }

  ngAfterViewInit(): void {
    let pageWidth: number = window.innerWidth;
    let pageHeight: number = window.innerHeight;
    setInterval(function (_this: EnemyExampleComponent,
                          pageWidth: number, pageHeight: number)
    {
     _this._movement.Move();

     if(_this._movement.IsEnimyOutOfScreen()){
       _this._movement.RestartMovement()
     }
     _this._movement.ApplyPosition(_this._enemyImg.nativeElement.style,
         _this._hpBar.nativeElement.style);
      }, 40, this, pageWidth, pageHeight);
  }
}
