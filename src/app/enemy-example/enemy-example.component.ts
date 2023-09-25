import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import {EnemyMovement} from 'src/AngularClasses/enemy-movenment';
import { Point } from 'src/AngularClasses/point';
@Component({
  selector: 'app-enemy-example',
  templateUrl: './enemy-example.component.html',
  styleUrls: ['./enemy-example.component.css']
})

export class EnemyExampleComponent implements AfterViewInit {
  @ViewChild('EnemyImg') _enemyImg: ElementRef;
  _movement: EnemyMovement;

  public constructor() {
    this._movement = new EnemyMovement(
        1,
        new Point(window.innerWidth/2 ,window.innerHeight/2),
        new Point(50,50));
    this._enemyImg = ViewChild("EnemyImg");
  }

  ngAfterViewInit(): void {
    console.log("X=", this._enemyImg.nativeElement.x);
    console.log("Y=", this._enemyImg.nativeElement.y);

    console.log("Style=", this._enemyImg.nativeElement.style);
    //console.log("Y=", this._enemyImg.nativeElement.setPosition(200, 100));

    let pageWidth: number = window.innerWidth;
    let pageHeight: number = window.innerHeight;

    setInterval(function (_this: EnemyExampleComponent, pageWidth: number, pageHeight: number) {
     _this._movement.Move();

     if(_this._movement.IsEnimyOutOfScreen()){
       _this._movement.GenerateStartPosition()
     }
      _this._movement.ApplyPosition(_this._enemyImg.nativeElement.style);
      }, 40, this, pageWidth, pageHeight);
  }
}
